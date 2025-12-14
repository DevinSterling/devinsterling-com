import styles from './Intro.module.scss'
import { IconBrandGithub, IconSquareArrowDownFilled } from '@tabler/icons-react';
import PillLinkButton from '../../../ui/button/PillLinkButton.tsx';
import { GITHUB_LINK } from '../../../const/values.ts';
import PillButton from '../../../ui/button/PillButton.tsx';
import * as Projects from './Projects.tsx';

const data = [
  <><span className={styles.accent}>Lorem</span> ipsum dolor sit</>,
  <>Nam <span className={styles.accent}>viverra</span> libero lorem</>,
  <>Nullam vestibulum <span className={styles.accent}>ex</span></>,
  <><span className={styles.accent}>In</span> eget convallis tellus</>,
  <>Lorem ipsum dolor <span className={styles.accent}>sit</span> amet</>,
  <>Nam viverra <span className={styles.accent}>libero</span> lorem et</>,
];

export default function Intro({ showSub }: { showSub: boolean }) {
  return (
    <section className={styles.intro} id='home'>
      <div className={styles.background_words} aria-hidden="true">
        {data.map((words, i) => (
          <div key={i} className={styles.rail}>
            <div className={styles.words}>{words}</div>
            <div className={styles.words}>{words}</div>
          </div>
        ))}
      </div>
      <div className={`${styles.sub} ${showSub ? styles.hide : ''}`}>
        <PillLinkButton to={GITHUB_LINK} target='_blank' Icon={IconBrandGithub}>
          <span className={styles.optional_text}>GitHub</span>
        </PillLinkButton>
        <PillButton
          className={styles.scroll_down}
          title={'Scroll Down'}
          onClick={() => document.getElementById(Projects.ID)?.scrollIntoView({ behavior: 'smooth' })}>
          <span className={styles.svg_wrapper}>
            <IconSquareArrowDownFilled />
          </span>
        </PillButton>
        {/*<PillLinkButton to={LINKEDIN_LINK} target='_blank' Icon={IconBrandLinkedin}>*/}
        {/*  <span className={styles.optional_text}>LinkedIn</span>*/}
        {/*</PillLinkButton>*/}
      </div>
    </section>
  );
}