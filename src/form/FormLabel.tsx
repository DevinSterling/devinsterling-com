import { HTMLAttributes } from 'react';

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  label: string,
}

export default function FormLabel({ label, children, ...props }: FormLabelProps) {
  return (
    <label {...props}>
      <span>{label}</span>
      {children}
    </label>
  );
}