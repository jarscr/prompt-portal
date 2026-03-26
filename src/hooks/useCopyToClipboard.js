import { useState, useCallback, useRef } from 'react';

export function useCopyToClipboard() {
  const [copiedId, setCopiedId] = useState(null);
  const timeoutRef = useRef(null);

  const copy = useCallback((text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  return { copy, copiedId };
}
