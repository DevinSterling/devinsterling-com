import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/recognizer/recognizer_api.png',
    alt: ''
  }, {
    src: '/images/recognizer/recognizer_UML.png',
    alt: ''
  }, {
    src: '/images/recognizer/recognizer_uc_attendance_system.png',
    alt: ''
  }, {
    src: '/images/recognizer/recognizer_sd_add_facial_features.png',
    alt: ''
  }, {
    src: '/images/recognizer/recognizer_sq_add_event.png',
    alt: ''
  }
];

export const RECOGNIZER: Project = {
  name: 'Recognizer',
  link: 'https://github.com/devinsterling/',
  languages: [language.PYTHON],
  technologies: [technology.FASTAPI, technology.DEEPL],
  introduction: 'Multi-purpose facial recognition attendance monitoring API service.',
  synopsis:
    `Featuring an OpenAPI-compliant REST API, systems can integrate with Recognizer 
     to manage attendance for events by sharing webcam feeds for facial detection of attendees.
     Authentication backed by JSON Web Tokens (JWT) for privileged access of REST endpoints.`,
  thumbnail: images[2],
  images,
};

export default RECOGNIZER;