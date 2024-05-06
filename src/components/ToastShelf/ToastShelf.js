import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToast } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, dismissToast } = useToast();
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => dismissToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
