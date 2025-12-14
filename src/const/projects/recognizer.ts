import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/recognizer/recognizer_api.png',
    alt: 'REST OpenAPI interface'
  }, {
    src: '/images/recognizer/recognizer_uc_attendance_system.png',
    alt: 'Use-case Diagram: Recognizer System'
  }, {
    src: '/images/recognizer/recognizer_UML.png',
    alt: 'Class Diagram: Recognizer System'
  }, {
    src: '/images/recognizer/recognizer_sd_add_facial_features.png',
    alt: 'Sequence Diagram: Adding user facial features'
  }, {
    src: '/images/recognizer/recognizer_sq_add_event.png',
    alt: 'Sequence Diagram: Adding an event'
  }
];

const RECOGNIZER: Project = {
  name: 'Recognizer',
  link: 'https://github.com/devinsterling/recognizer',
  languages: [language.PYTHON],
  technologies: [technology.FASTAPI, technology.DEEPL],
  introduction: 'A multi-purpose facial recognition attendance monitoring API service.',
  synopsis:
    `Featuring an OpenAPI-compliant REST API, systems can integrate with Recognizer 
     to manage attendance for events by sharing webcam feeds for facial detection of attendees.
     Authentication backed by JSON Web Tokens (JWT) for privileged access of REST endpoints.`,
  thumbnail: images[2],
  color: '#ff0068',
  images,
};

export default RECOGNIZER;