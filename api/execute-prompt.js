function extractTextFromResponse(data) {
  if (typeof data?.output_text === 'string' && data.output_text.trim()) {
    return data.output_text;
  }

  const output = Array.isArray(data?.output) ? data.output : [];
  const parts = [];

  for (const item of output) {
    const contents = Array.isArray(item?.content) ? item.content : [];
    for (const content of contents) {
      if (typeof content?.text === 'string' && content.text.trim()) {
        parts.push(content.text);
      }
    }
  }

  return parts.join('\n\n').trim();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: 'Falta OPENAI_API_KEY en variables de entorno.',
    });
  }

  const prompt = typeof req.body?.prompt === 'string' ? req.body.prompt.trim() : '';
  if (!prompt) {
    return res.status(400).json({ error: 'El prompt es requerido.' });
  }

  try {
    const openAiRes = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        input: prompt,
      }),
    });

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      const message = data?.error?.message || 'OpenAI devolvió un error.';
      return res.status(openAiRes.status).json({ error: message });
    }

    const responseText = extractTextFromResponse(data);
    if (!responseText) {
      return res.status(502).json({
        error: 'No se pudo extraer texto de la respuesta de OpenAI.',
      });
    }

    return res.status(200).json({
      response: responseText,
      responseId: data.id,
      model: data.model,
    });
  } catch {
    return res.status(500).json({
      error: 'Error inesperado al llamar a OpenAI.',
    });
  }
}
