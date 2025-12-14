import Image from '../../model/Image.ts';
import Project from '../../model/project.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/hoteru/hoteru_home_page.png',
    alt: 'Home Page: General overview about the hotel'
  }, {
    src: '/images/hoteru/hoteru_attractions_page.png',
    alt: 'Attractions Page: Benefits customers receive'
  }, {
    src: '/images/hoteru/hoteru_about_page.png',
    alt: 'About Page: Hotel background and contact details'
  }, {
    src: '/images/hoteru/hoteru_input_validation.png',
    alt: 'About Page (Input validation): All input fields are validated on the client/server-side'
  }, {
    src: '/images/hoteru/hoteru_rooms_page.png',
    alt: 'Available Rooms Page: All rooms available for reservation'
  }, {
    src: '/images/hoteru/hoteru_reserve_page.png',
    alt: 'Reservation Page (1/2): Required information to make a reservation'
  }, {
    src: '/images/hoteru/hoteru_reserve_page_2.png',
    alt: 'Reservation Page (2/2): Required information to make a reservation'
  }, {
    src: '/images/hoteru/hoteru_reservation_details_page.png',
    alt: 'Reservation Details Page: All user-inputted reservation details'
  }, {
    src: '/images/hoteru/hoteru_cancel_reservation_page.png',
    alt: 'Cancelled Reservation Page: Page redirected to when a reservation is cancelled'
  }, {
    src: '/images/hoteru/hoteru_find_reservation_page.png',
    alt: 'Find Reservation Page: Retrieve the details of an existing reservation by ID'
  }, {
    src: '/images/hoteru/hoteru_invalid_reservation_id_page.png',
    alt: 'Invalid Reservation ID Page: Page redirected to when an invalid reservation ID is provided'
  }, {
    src: '/images/hoteru/hoteru_404_page.png',
    alt: '404 Page: When a user requests a non-existent page, they\'re redirected to this one'
  }, {
    src: '/images/hoteru/hoteru_admin_login_page_invalid_credentials.png',
    alt: 'Login Page (Invalid Credentials): Login page for Admins'
  }, {
    src: '/images/hoteru/hoteru_admin_management.png',
    alt: 'Management Page (Only accessible by Admins): Access to actions an Admin can perform'
  }, {
    src: '/images/hoteru/hoteru_admin_management_small_screen.png',
    alt: 'Management Page (Only accessible by Admins): Responsiveness on a small-screen display'
  }, {
    src: '/images/hoteru/hoteru_view_feedback.png',
    alt: 'Feedback Page (Only accessible by Admins): All feedback provided by users'
  }, {
    src: '/images/hoteru/hoteru_view_reservations.png',
    alt: 'Reservations Page (Only accessible by Admins): All existing reservations made by users'
  }, {
    src: '/images/hoteru/hoteru_create_room.png',
    alt: 'Create Room Page (Only accessible by Admins): Create a new room for user reservations'
  }, {
    src: '/images/hoteru/hoteru_client_and_server_side_validation.png',
    alt: 'Create Room Page (Only accessible by Admins): Override front-end validation; will be blocked by server-side validation'
  }, {
    src: '/images/hoteru/hoteru_admin_rooms_page.png',
    alt: 'Available Rooms Page (Only accessible by Admins): All rooms available for reservation'
  }, {
    src: '/images/hoteru/hoteru_room_added_modified.png',
    alt: 'Create/Modify Room Page (Only accessible by Admins): Set the properties of a room'
  }
];

const Hoteru: Project = {
  name: 'Hoteru',
  link: 'https://github.com/devinsterling/hoteru',
  languages: [language.PHP, language.JAVASCRIPT, language.SQL],
  technologies: [technology.BOOTSTRAP],
  introduction: 'A hotel website that allows guests to make reservations for their desired rooms.',
  synopsis:
    `Accommodates two roles, guests (no login required) and admins.
     Not limited to, guests can browse available rooms, make reservations, and submit feedback. 
     Admins can create and modify rooms, view all reservations and customer feedback.
     Utilizes client/server-side validation and SQL prepared statements to ensure integrity and security of data.`,
  thumbnail: images[0],
  color: '#ff5200',
  images,
};

export default Hoteru;
