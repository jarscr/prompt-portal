import PromptCard from './PromptCard';

export default function CategorySection({
  category,
  prompts,
  copiedId,
  onCopy,
  onRunInChatGPT,
  executions,
  onRunWithOpenAI,
}) {
  if (prompts.length === 0) return null;

  return (
    <section className="cat-section" id={category.id}>
      <div className="cat-header" style={{ borderColor: category.color }}>
        <span className="cat-icon">{category.icon}</span>
        <span className="cat-title" style={{ color: category.color }}>
          {category.label}
        </span>
        <span className="cat-badge" style={{ background: category.color }}>
          {prompts.length} {prompts.length === 1 ? 'prompt' : 'prompts'}
        </span>
      </div>
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          color={category.color}
          isCopied={copiedId === prompt.id}
          onCopy={onCopy}
          onRunInChatGPT={onRunInChatGPT}
          execution={executions[prompt.id]}
          onRunWithOpenAI={onRunWithOpenAI}
        />
      ))}
    </section>
  );
}
