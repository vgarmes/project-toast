import React from 'react';
import { useKeydown } from '../hooks/use-keydown';

export const ToastContext = React.createContext();

export function useToast() {
  return React.useContext(ToastContext);
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const toast = ({ message, variant }) => {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  };

  const dismissToast = (id) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  const handleEscape = React.useCallback(() => setToasts([]), []);
  useKeydown('Escape', handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
