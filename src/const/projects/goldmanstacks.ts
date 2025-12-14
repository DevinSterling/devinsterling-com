import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/goldmanstacks/goldman_home_page.jpg',
    alt: 'Home Page: General overview of core information such as the current balance, opened accounts, and recent transactions'
  }, {
    src: '/images/goldmanstacks/goldman_home_page.png',
    alt: 'Home Page on medium-sized screens (i.e., tablets)'
  }, {
    src: '/images/goldmanstacks/goldman_transactions_page.png',
    alt: 'Transactions History Page: History for a specific account, including details, actions, and date filter'
  }, {
    src: '/images/goldmanstacks/goldman_transactions_page_modal.jpg',
    alt: 'Transactions History Page w/ Transaction Details Modal'
  }, {
    src: '/images/goldmanstacks/goldman_new_payment_page.png',
    alt: 'New Payments Page'
  }, {
    src: '/images/goldmanstacks/goldman_new_payment_page_mobile.png',
    alt: 'New Payments Page on small-sized screens (i.e., mobile devices)'
  }, {
    src: '/images/goldmanstacks/goldman_internal_transfer_page.png',
    alt: 'Transfer Page: Transfer funds between accounts'
  }, {
    src: '/images/goldmanstacks/goldman_statement_page.png',
    alt: 'Statements Page: Bank statement; summary of financial transactions'
  }, {
    src: '/images/goldmanstacks/goldman_login_page.png',
    alt: 'Login Page'
  }, {
    src: '/images/goldmanstacks/goldman_403_redirected.png',
    alt: 'Login Page: Signed-out user redirected from a page where access is denied'
  }, {
    src: '/images/goldmanstacks/goldman_manage_users_page.png',
    alt: "Users Page (Only accessible by Admins): Viewing all registered users"
  }, {
    src: '/images/goldmanstacks/goldman_manage_open_requests_page.jpg',
    alt: `Bank Account Requests Page (Only accessible by Admins): Viewing all requests to open a new bank account
          w/ confirmation modal`
  },
];

const GOLDMAN_STACKS: Project = {
  name: 'Goldman Stacks',
  link: 'https://github.com/devinsterling/GoldmanStacks',
  languages: [language.PHP, language.JAVASCRIPT, language.SQL],
  technologies: [technology.JQUERY],
  introduction: 'Proof of concept banking application that handles transactions, transfers, withdrawals, and deposits.',
  synopsis:
    `The application encompasses two user roles: Client and Employee.
     Clients can manage their funds by opening/closing bank accounts, depositing, withdrawing, transferring, and managing payments. 
     Employees are able to track client activity and approve or deny client requests.
     Uses client/server-side validation, SQL prepared statements, and CSRF tokens for protection against malicious users.`,
  thumbnail: images[1],
  color: '#ffa500',
  images,
};

export default GOLDMAN_STACKS;