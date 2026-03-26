export default function PromptCard({ prompt, color, isCopied, onCopy }) {
  return (
    <div className="prompt-card" style={{ borderLeftColor: color }}>
      <div className="card-header">
        <div>
          <div className="card-title">{prompt.title}</div>
          {prompt.source && (
            <div className="card-source">Fuente: {prompt.source}</div>
          )}
        </div>
        <button
          className={`copy-btn ${isCopied ? 'copied' : ''}`}
          onClick={() => onCopy(prompt.content, prompt.id)}
        >
          {isCopied ? '✓ Copiado' : '📋 Copiar'}
        </button>
      </div>
      <div className="prompt-body">{prompt.content}</div>
    </div>
  );
}
