import { useState, useMemo } from 'react';
import prompts from './data/prompts.json';
import { CATEGORIES } from './utils/categories';
import { useSearch } from './hooks/useSearch';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';
import Sidebar from './components/Sidebar';
import StatsBar from './components/StatsBar';
import CategorySection from './components/CategorySection';
import AdPlacement from './components/AdPlacement';
import ScrollToTop from './components/ScrollToTop';

const AD_AFTER_SECTION = 3;

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const filtered = useSearch(prompts, searchQuery);
  const { copy, copiedId } = useCopyToClipboard();

  const runInChatGPT = (content) => {
    const url = `https://chatgpt.com/?q=${encodeURIComponent(content)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const runInClaude = (content) => {
    const url = `https://claude.ai/new?q=${encodeURIComponent(content)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const promptCounts = useMemo(() => {
    const counts = {};
    for (const p of filtered) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [filtered]);

  const visibleCategories = CATEGORIES.filter((cat) => promptCounts[cat.id] > 0);
  const noResults = filtered.length === 0 && searchQuery.trim() !== '';

  return (
    <div className="layout">
      <Sidebar
        categories={CATEGORIES}
        promptCounts={promptCounts}
        totalPrompts={prompts.length}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />

      <main className="main-content">
        <AdPlacement id="header-promo" className="promo-slot-header" />

        <StatsBar
          totalPrompts={prompts.length}
          totalCategories={CATEGORIES.length}
        />

        {noResults && (
          <div className="no-results">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#64748B"
                strokeWidth="1.5"
                strokeLinecap="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
              />
            </svg>
            <p>No se encontraron prompts para tu búsqueda.</p>
          </div>
        )}

        {visibleCategories.map((cat, index) => (
          <div key={cat.id}>
            <CategorySection
              category={cat}
              prompts={filtered.filter((p) => p.category === cat.id)}
              copiedId={copiedId}
              onCopy={copy}
              onRunInChatGPT={runInChatGPT}
              onRunInClaude={runInClaude}
            />
            {index === AD_AFTER_SECTION - 1 && (
              <AdPlacement id="content-promo" className="promo-slot-content" />
            )}
          </div>
        ))}
      </main>

      <ScrollToTop />
    </div>
  );
}
