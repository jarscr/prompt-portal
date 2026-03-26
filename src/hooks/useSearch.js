import { useMemo } from 'react';

export function useSearch(prompts, query) {
  return useMemo(() => {
    if (!query.trim()) return prompts;
    const q = query.toLowerCase().trim();
    return prompts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q)
    );
  }, [prompts, query]);
}
