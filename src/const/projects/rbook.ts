import Project from '../../model/project.ts';
import * as language from '../languages.ts';
import Image from '../../model/Image.ts';

const images: Image[] = [
  {
    src: '/images/rbook/rbook.png',
    alt: 'The rbook library'
  }
]

const RBOOK: Project = {
  name: 'rbook',
  link: 'https://github.com/devinsterling/rbook',
  languages: [language.Rust],
  technologies: [],
  introduction: 'A fast, format-agnostic, ergonomic ebook library with a focus on EPUB.',
  synopsis:
    `The primary goal of rbook is to provide an easy-to-use high-level threadsafe API for handling ebooks. 
    Most importantly, this library is designed with future formats in mind (CBZ, FB2, MOBI, etc.) 
    via core traits defined within the ebook and reader module, allowing all formats to share the same “base” API.
    While not limited to, features include access to expressively typed metadata (title, author, identifiers), 
    manifest (contained resources), spine (canonical reading order), and navigation (table of contents).`,
  thumbnail: images[0],
  color: '#ff5900',
  images,
};

export default RBOOK;