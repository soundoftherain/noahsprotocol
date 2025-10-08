import { useState, useCallback } from "react";

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const Toast = () =>
    message ? (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded">
        {message}
      </div>
    ) : null;

  return { showToast, Toast };
}
