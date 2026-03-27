export default function PromptCard({
  prompt,
  color,
  isCopied,
  onCopy,
  onRunInChatGPT,
  onRunInClaude,
}) {
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
            className="claude-btn"
            onClick={() => onRunInClaude(prompt.content)}
          >
            Ejecutar en Claude
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
    </div>
  );
}
