import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/goldmanstacks/goldman_home_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_home_page.jpg',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_transactions_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_transactions_page_modal.jpg',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_new_payment_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_new_payment_page_mobile.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_internal_transfer_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_statement_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_login_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_403_redirected.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_manage_users_page.png',
    alt: ''
  }, {
    src: '/images/goldmanstacks/goldman_manage_open_requests_page.jpg',
    alt: ''
  },
];

export const GOLDMAN_STACKS: Project = {
  name: 'Goldman Stacks',
  link: 'https://github.com/devinsterling/GoldmanStacks',
  languages: [language.PHP, language.JAVASCRIPT, language.SQL],
  technologies: [technology.JQUERY],
  introduction: 'Proof of concept banking application that handles transactions, transfers, withdrawals, and deposits.',
  synopsis:
    `The application encompasses two user roles: Client and Employee.
     Clients can manage their funds by opening/closing bank accounts, depositing, withdrawing, transferring, and managing payments. 
     Employees are able to track client activity and approve or deny client requests.`,
  thumbnail: images[0],
  images,
};

export default GOLDMAN_STACKS;