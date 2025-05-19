import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/urfood/urfood_home_page.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_home_page_ingredients.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_search_page_ingredients.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_recipe_page_upvoting.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_recipe_page_writing_review.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_recipe_page_cancel_review.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_recipe_page_login_modal.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_404.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_login_page.png',
    alt: '',
  }, {
    src: '/images/urfood/urfood_signup_page.png',
    alt: '',
  }
];

export const URFOOD: Project = {
  name: 'Urfood',
  link: 'https://github.com/devinsterling/Urfood',
  languages: [language.JAVA, language.JAVASCRIPT],
  technologies: [technology.SPRING, technology.REACTJS],
  introduction:
    `Web application to review and search for recipes through ingredients, assisting cooks find food within their interests.`,
  synopsis:
    `Provided a set of ingredients, Urfood will search for dishes possible to make from a database that matches the user’s criteria. 
     Each featuring the recipe ingredients, measurements, step-by-step walkthrough, and registered user reviews.
     Urfood is accessible to all, however, users can register to leave a review and up-vote or down-vote a recipe.`,
  thumbnail: images[0],
  images,
};

export default URFOOD;