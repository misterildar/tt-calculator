import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'calculate' | 'transparent';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  width?: number;
<<<<<<< HEAD
  height?: number;
=======
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
}

export const Button = ({
  onClick,
  text,
  className,
  type = 'button',
  disabled = false,
  isLoading = false,
  variant = 'primary',
  width,
<<<<<<< HEAD
  height,
=======
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    isLoading && styles.loading,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

<<<<<<< HEAD
  const buttonStyle: React.CSSProperties = {
    ...(width !== undefined && { width: `${width}px` }),
    ...(height !== undefined && { height: `${height}px` }),
  };
=======
  const buttonStyle = width ? { width: `${width}px` } : {};
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
<<<<<<< HEAD
      style={Object.keys(buttonStyle).length > 0 ? buttonStyle : undefined}
=======
      style={buttonStyle}
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className={styles.loadingText}>Loading...</span> : text}
    </button>
  );
};
