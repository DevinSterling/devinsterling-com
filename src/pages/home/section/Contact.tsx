import { useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconFileTypeDoc, IconSend } from '@tabler/icons-react';
import { GITHUB_LINK, LINKEDIN_LINK } from '../../../const/values.ts';
import PillButton from '../../../ui/button/PillButton.tsx';
import ListGroup from '../../../ui/ListGroup.tsx';
import ContactForm from '../../../form/ContactForm.tsx';
import styles from './Contact.module.scss'
import PillLinkButton from '../../../ui/button/PillLinkButton.tsx';

const ABOUT = [
  'I\'m Devin Sterling, a recent graduate, technology enthusiast, and more!',
  'Heavily interested in the creation of software, including software engineering and full-stack development!',
];

export default function Contact() {
  const [ showContact, setShowContact ] = useState<boolean>(false);

  return (
    <>
      <section className={styles.contact} id='contact'>
        <div className={styles.content}>
          <h2 className={styles.title}>Hi there!</h2>
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
      {showContact && <div className={styles.footer}>
        <ListGroup spacing={10} className={styles.contact_buttons}>
          <ListGroup.Item>
            <PillLinkButton to={GITHUB_LINK} Icon={IconBrandGithub} target='_blank'>
              GitHub
            </PillLinkButton>
          </ListGroup.Item>
          <ListGroup.Item>
            <PillLinkButton to={LINKEDIN_LINK} Icon={IconBrandLinkedin} target='_blank'>
              LinkedIn
            </PillLinkButton>
          </ListGroup.Item>
          <ListGroup.Item>
            <PillLinkButton to='' Icon={IconFileTypeDoc} target='_blank'>
              Resume
            </PillLinkButton>
          </ListGroup.Item>
        </ListGroup>
      </div>}
    </>
  );
}