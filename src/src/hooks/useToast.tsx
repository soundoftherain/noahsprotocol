import * as React from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
};

type ToasterContextType = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
};

const ToasterContext = React.createContext<ToasterContextType | undefined>(
  undefined
);

export const useToast = () => {
  const context = React.useContext(ToasterContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = React.useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, ...toast };
    setToasts((prev) => [...prev, newToast]);

    // Auto-remove after duration (default 5s)
    const duration = toast.duration ?? 5000;
    setTimeout(() => removeToast(id), duration);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {/* Toast Renderer */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg border border-gray-700 animate-fade-in-up"
          >
            {toast.title && <p className="font-semibold">{toast.title}</p>}
            {toast.description && (
              <p className="text-sm opacity-80">{toast.description}</p>
            )}
            {toast.action && <div className="mt-2">{toast.action}</div>}
          </div>
        ))}
      </div>
    </ToasterContext.Provider>
  );
};
