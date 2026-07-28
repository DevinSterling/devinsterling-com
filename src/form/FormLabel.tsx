import { ComponentProps } from 'react';

interface FormLabelProps extends ComponentProps<'label'> {
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