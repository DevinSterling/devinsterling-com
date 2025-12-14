import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/claw/claw_ui.png',
    alt: 'Interface showing timestamped control history and automated attempted reconnection (i.e., if the servo is temporarily unplugged)',
  }, {
    src: '/images/claw/claw_ui_2.png',
    alt: 'Console displaying that a servo connection was not found',
  }, {
    src: '/images/claw/claw_servo.png',
    alt: 'Gripper containing the servo',
  }
];

const CLAW: Project = {
  name: 'CLAW',
  link: 'https://github.com/devinsterling/CLAW',
  languages: [language.PYTHON, language.C],
  technologies: [technology.TKINTER, technology.ARDUINO],
  introduction: 'A graphical interface to control a servo over a serial communication channel.',
  synopsis:
    `Features intuitive slider-based controls to set the angle, minimum angle, and maximum angle of a servo. 
     Provides an in-application real-time console to review timestamped actions, 
     such as angle adjustments and re-connection attempts.`,
  thumbnail: images[0],
  color: '#fff',
  images,
};

export default CLAW;