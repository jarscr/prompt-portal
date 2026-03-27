export default function PromptCard({
  prompt,
  color,
  isCopied,
  onCopy,
  onRunInChatGPT,
  execution,
  onRunWithOpenAI,
}) {
  const isRunning = execution?.loading || false;

  return (
    <div className="prompt-card" style={{ borderLeftColor: color }}>
      <div className="card-header">
        <div>
          <div className="card-title">{prompt.title}</div>
          {prompt.source && (
            <div className="card-source">Fuente: {prompt.source}</div>
          )}
        </div>
        <div className="card-actions">
          <button
            className="openai-btn"
            onClick={() => onRunWithOpenAI(prompt.id, prompt.content)}
            disabled={isRunning}
          >
            {isRunning ? 'Ejecutando...' : 'Ejecutar con OpenAI'}
          </button>
          <button
            className="run-btn"
            onClick={() => onRunInChatGPT(prompt.content)}
          >
            Probar en ChatGPT
          </button>
          <button
            className={`copy-btn ${isCopied ? 'copied' : ''}`}
            onClick={() => onCopy(prompt.content, prompt.id)}
          >
            {isCopied ? '✓ Copiado' : 'Copiar prompt'}
          </button>
        </div>
      </div>
      <div className="prompt-body">{prompt.content}</div>
      {(execution?.response || execution?.error) && (
        <div className={`ai-result ${execution?.error ? 'error' : ''}`}>
          <div className="ai-result-title">
            {execution?.error ? 'Error al ejecutar' : 'Respuesta de OpenAI'}
          </div>
          <div className="ai-result-body">
            {execution?.error || execution?.response}
          </div>
        </div>
      )}
    </div>
  );
}
