import { useState } from 'react';
import { IconSend } from '@tabler/icons-react';
import PillButton from '../../../ui/button/PillButton.tsx';
import ContactForm from '../../../form/ContactForm.tsx';
import Hexagon from '../../../ui/shape/Hexagon.tsx';
import styles from './Contact.module.scss'

const ABOUT = [
  'I\'m Devin Sterling, a recent graduate, technology enthusiast, and more!',
  'Heavily interested in the creation and development of software, including software engineering!',
];

export default function Contact() {
  const [ showContact, setShowContact ] = useState<boolean>(false);

  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.content}>
        <div className={styles.top}>
          <Hexagon className={styles.shape}>
            {/* <img className={styles.face} src='/images/avatar.png' alt='Avatar'/> */}
            <span className={styles.hand}>✋🏻</span>
          </Hexagon>
          <h2 className={styles.title}>Hi there!</h2>
        </div>
        <div className={styles.about}>
          {ABOUT.map((s, i) => <p key={i}>{s}</p>)}
        </div>
        {showContact ? (
          <ContactForm/>
        ) : (
          <PillButton className={styles.show_contact_button}
                      onClick={() => setShowContact(true)}
                      disabled={showContact}>
            <IconSend/>
            Let's get in touch!
          </PillButton>
        )}
      </div>
    </section>
  );
}