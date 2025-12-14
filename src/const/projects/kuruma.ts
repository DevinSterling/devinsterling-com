import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';

const images: Image[] = [
  {
    src: '/images/kuruma/kuruma_home_page.jpg',
    alt: 'Home Page: All purchasable vehicles'
  }, {
    src: '/images/kuruma/kuruma_search_page.jpg',
    alt: 'Search Page: Purchasable vehicles associated with the search term "Ford" and vehicle type constraint "Standard"'
  }, {
    src: '/images/kuruma/kuruma_view_car_page_user.png',
    alt: 'Vehicle Page (User View): Vehicle details including price and quantity, alongside an option to add the vehicle to the cart'
  }, {
    src: '/images/kuruma/kuruma_view_car_page_admin.png',
    alt: 'Vehicle Page (Admin View): Vehicle details including price and quantity, alongside an option to edit the vehicle'
  }, {
    src: '/images/kuruma/kuruma_cart_page.png',
    alt: 'Cart Page: Added-to-cart vehicles and associated total cost with tax. Includes options to change the quantity of or remove vehicles'
  }, {
    src: '/images/kuruma/kuruma_receipt_page.png',
    alt: 'Receipt Page: Purchase overview including order details, shipping, and costs'
  }, {
    src: '/images/kuruma/kuruma_order_history_page.jpg',
    alt: 'Order History Page: All previous orders made by a user'
  }, {
    src: '/images/kuruma/kuruma_account_setup_page.png',
    alt: 'Account Setup Page: Modify user account information'
  }, {
    src: '/images/kuruma/kuruma_sales_page.png',
    alt: 'Sales Page (Only accessible by Admins): Total sales for a specified admin'
  }, {
    src: '/images/kuruma/kuruma_sales_page2.png',
    alt: 'Total Sales Page (Only accessible by Admins): Total sales across all admins'
  }, {
    src: '/images/kuruma/kuruma_edit_user_page.png',
    alt: 'Edit User & Overview Page (Only accessible by Admins): Where admins can modify user details and view their order history'
  }, {
    src: '/images/kuruma/kuruma_edit_admin_page.png',
    alt: 'Edit Admin Page (Only accessible by Admins): Modify admin account information'
  }, {
    src: '/images/kuruma/kuruma_edit_manufacturer_page.png',
    alt: 'Edit Manufacturer Page (Only accessible by Admins): Modify manufacturer information'
  }, {
    src: '/images/kuruma/kuruma_edit_vehicle_page.png',
    alt: 'Edit Vehicle Page (Only accessible by Admins): Modify vehicle information'
  }, {
    src: '/images/kuruma/kuruma_users_admin.png',
    alt: 'Users Overview Page (Only accessible by Admins): All users registered on the platform'
  }, {
    src: '/images/kuruma/kuruma_manufacturers_page.png',
    alt: 'Manufacturers Overview Page (Only accessible by Admins): All manufacturers registered on the platform'
  }, {
    src: '/images/kuruma/kuruma_vehicles_page.png',
    alt: 'Vehicles Overview Page (Only accessible by Admins): All vehicles registered on the platform'
  }, {
    src: '/images/kuruma/kuruma_db1.jpg',
    alt: 'Database structure'
  }, {
    src: '/images/kuruma/kuruma_db2.jpg',
    alt: 'Database structure'
  }
];

const KURUMA: Project = {
  name: 'Kuruma',
  link: 'https://github.com/devinsterling/Kuruma',
  languages: [language.PHP, language.SQL],
  technologies: [],
  introduction: 'Platform to conveniently purchase vehicles eliminating the hassle of dealerships.',
  synopsis:
    `At the click of a button, consumers can purchase vehicles, "shipped" directly to their address. 
     Kuruma is a login-based website, accommodating two types of users: Admins and Consumers. 
     Admins observe/maintain vehicles inventory, manufacturer information, all user details, and sales. 
     Consumers purchase listed vehicles, update their account information, and view order history.`,
  thumbnail: images[0],
  color: 'dodgerblue',
  images,
};

export default KURUMA;