import Language from './language.ts';
import Image from './Image.ts';
import Technology from './technology.ts';

export default interface Project {
  name: string,
  link: string,
  languages: Language[],
  technologies: Technology[],
  introduction: string,
  synopsis: string,
  thumbnail: Image,
  images: Image[],
  color: string,
}