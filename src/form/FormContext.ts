import { FormState } from './FormState.ts';

export default interface FormContext {
  state: FormState,
  message: string,
}

export const UNSUBMITTED_FORM: FormContext = {
  state: FormState.UNSUBMITTED,
  message: 'Form is currently unsubmitted'
}