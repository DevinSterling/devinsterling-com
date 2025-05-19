import { useState } from 'react';
import { IconSend } from '@tabler/icons-react';
import { FormState } from './FormState.ts';
import FormContext, { UNSUBMITTED_FORM } from './FormContext.ts';
import PillButton from '../ui/button/PillButton.tsx';
import FormLabel from './FormLabel.tsx';
import Form from './Form.tsx';
import * as ContactService from '../service/ContactService.ts';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [ formContext, setFormContext ] = useState<FormContext>(UNSUBMITTED_FORM);
  const isDisabled = formContext.state == FormState.SUBMITTING || formContext.state == FormState.SUCCESS;

  const onRequestSubmit = async (data: FormData) => {
    try {
      setFormContext({
        state: FormState.SUBMITTING,
        message: 'Sending message...',
      });
      await ContactService.submitContactMessage(data);
      setFormContext({
        state: FormState.SUCCESS,
        message: 'Thank you, message sent!',
      });
    } catch (e) {
      setFormContext({
        state: FormState.ERROR,
        message: (e as Error).message ?? 'An unexpected error occurred',
      });
    }
  };

  return (
    <Form context={formContext} onRequestSubmit={onRequestSubmit} className={styles.contact_form}>
      <FormLabel label='Name*'>
        <input type='text' name='name' placeholder='Name' autoComplete='name' disabled={isDisabled} required autoFocus/>
      </FormLabel>
      <FormLabel label='Email*'>
        <input type='email' name='email' placeholder='Email' autoComplete='email' disabled={isDisabled} required />
      </FormLabel>
      <FormLabel label='Message*'>
        <textarea name='message' placeholder='Message' disabled={isDisabled} required />
      </FormLabel>
      {/** api.staticforms.xyz identifies requests as SPAM if the `honeypot` field is NOT empty */}
      <input type='text' name='honeypot' className={styles.secret} />
      {!isDisabled && (
        <PillButton type='submit' className={styles.send_button}>
          Send Message
          <IconSend/>
        </PillButton>
      )}
    </Form>
  );
}