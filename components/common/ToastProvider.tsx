"use client";

// Simple toast system - no external dependencies
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
}

const ToastContext = createContext<{
  success: (msg: string) => void;
  error: (msg: string) => void;
}>({ success: () => {}, error: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

let toastId = 0;

export default function ToastProvider({ children }: { children?: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: "success" | "error") => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const success = useCallback((msg: string) => addToast(msg, "success"), [addToast]);
  const error = useCallback((msg: string) => addToast(msg, "error"), [addToast]);

  return (
    <ToastContext.Provider value={{ success, error }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-[9999] grid gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-5 py-3 rounded-xl text-sm font-medium shadow-lg backdrop-blur-md animate-[slideIn_0.3s_ease-out] ${
              toast.type === "success"
                ? "bg-android-green/90 text-black"
                : "bg-red-500/90 text-white"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </ToastContext.Provider>
  );
}
