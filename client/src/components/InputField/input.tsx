import React from 'react';
import { forwardRef, Ref } from 'react';

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  label: string;
  errorMessage?: string;
  refCallback?: (input: HTMLInputElement) => void;
}

const InputField = forwardRef(({ label, id, name, value, onChange, disabled, errorMessage, refCallback, ...rest }: InputFieldProps, ref: Ref<HTMLInputElement>) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    event.currentTarget.value !== '' && refCallback?.(event.currentTarget);
  };

  return (
    <div>
      <label htmlFor={id || name}>{label}</label>
      

      <input
        id={id || name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        data-error={!!errorMessage}
        aria-invalid={!!errorMessage}
        ref={ref}
        {...rest}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
});

export default InputField;