import React from 'react';
import { ButtonProps } from './Button.types';

const baseStyles = {
  backgroundColor: '#fff', // Default background color
  borderRadius: '4px',
  borderStyle: 'none',
  color: '#333',
  padding: '0.75rem 1.5rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '1rem',
  lineHeight: 'normal',
  userSelect: 'none',
};

const primaryStyles = {
  ...baseStyles,
  backgroundColor: '#4caf50',
  color: '#ffffff',
  hoverBackgroundColor: 'darkgreen',
};

const secondaryStyles = {
  ...baseStyles,
  backgroundColor: '#f44336',
  color: '#ffffff',
  hoverBackgroundColor: 'darkred',
};

const getVariantStyles = (variant: keyof typeof variantStyles): React.CSSProperties => {
  switch (variant) {
    case 'primary':
      return primaryStyles;
    case 'secondary':
      return secondaryStyles;
    default:
      throw Error(`Invalid variant "${variant}"`);
  }
};

const BaseButton = ({ children, variant = 'primary', className, onClick, ...props }: ButtonProps) => {
  const variantStyles = getVariantStyles(variant);

  return (
    <button
      className={className}
      style={{
        ...variantStyles,
        transition: 'background-color 0.2s ease-in-out',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) => (
  <BaseButton variant="primary" {...props} />
);

export const SecondaryButton = (props: ButtonProps) => (
  <BaseButton variant="secondary" {...props} />
);