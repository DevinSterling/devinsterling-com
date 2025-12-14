import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/urfood/urfood_home_page.png',
    alt: 'Home Page: Includes the main recipe search bar (and sign in button)',
  }, {
    src: '/images/urfood/urfood_home_page_ingredients.png',
    alt: 'Home Page: Recipe ingredients filter (Appears when the main search bar is initially selected)',
  }, {
    src: '/images/urfood/urfood_search_page_ingredients.png',
    alt: 'Search Page: `Mozzarella Cheese Pizaa` recipe results with minimal overview details',
  }, {
    src: '/images/urfood/urfood_recipe_page_upvoting.png',
    alt: 'Recipe Page: Recipe information including duration, steps, ingredients, upvotes, downvotes, and reviews',
  }, {
    src: '/images/urfood/urfood_recipe_page_writing_review.png',
    alt: 'Recipe Page: Writing a recipe review',
  }, {
    src: '/images/urfood/urfood_recipe_page_cancel_review.png',
    alt: 'Recipe Page - Cancel Review Modal: Appears when clicking the cancel review button',
  }, {
    src: '/images/urfood/urfood_recipe_page_login_modal.png',
    alt: 'Login Modal: Appears when attempting to performa a task that requires an account',
  }, {
    src: '/images/urfood/urfood_404.png',
    alt: '404 Page: When a user requests a non-existent page, they\'re redirected to this one',
  }, {
    src: '/images/urfood/urfood_login_page.png',
    alt: 'Login Page: Dedicated login page',
  }, {
    src: '/images/urfood/urfood_signup_page.png',
    alt: 'Signup Page: Creating a new account (to participate in recipe votes and reviews)',
  }
];

const URFOOD: Project = {
  name: 'Urfood',
  link: 'https://github.com/devinsterling/Urfood',
  languages: [language.JAVA, language.JAVASCRIPT],
  technologies: [technology.SPRING, technology.REACTJS],
  introduction:
    `A web application to review and search for recipes through ingredients, assisting cooks find food within their interests.`,
  synopsis:
    `Provided a set of ingredients, Urfood will search for dishes possible to make from a database that matches the user’s criteria. 
     Each featuring the recipe ingredients, measurements, step-by-step walkthrough, and registered user reviews.
     Urfood is accessible to all, however, users can register to leave a review and up-vote or down-vote recipes.`,
  thumbnail: images[0],
  color: '#6750ff',
  images,
};

export default URFOOD;