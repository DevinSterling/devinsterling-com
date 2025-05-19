import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: "/images/viral/viral_home_page_recent.png",
    alt: "Home Page: Recent Posts (Cursor-based infinite scrolling)"
  }, {
    src: "/images/viral/viral_home_page_popular.png",
    alt: "Home Page: Popular Posts (Cursor-based infinite scrolling)"
  }, {
    src: "/images/viral/viral_mobile_side_bar.png",
    alt: "Side bar on small-sized screen (i.e., mobile devices)."
  }, {
    src: "/images/viral/viral_search_page.png",
    alt: "Search Page: Posts found containing the query \"hi\" (Cursor-based infinite scrolling)"
  }, {
    src: "/images/viral/viral_search_page_no_results.png",
    alt: "Search Page: No posts found containing the query \"abc123\""
  }, {
    src: "/images/viral/viral_signed_in_context_menu.png",
    alt: "Context menu for a signed in user"
  }, {
    src: "/images/viral/viral_signed_out_context_menu.png",
    alt: "Context menu for a signed out user"
  }, {
    src: "/images/viral/viral_modal_sign_in.png",
    alt: "Login Modal: Providing a username and password."
  }, {
    src: "/images/viral/viral_modal_sign_up_username_taken.png",
    alt: `Create Account Modal: Accessible anywhere upon commenting, voting, etc. 
            Dynamically shows if the requested username is taken.`
  }, {
    src: "/images/viral/viral_settings_page_account.png",
    alt: "Settings Page: User account configuration accessible via the signed-in user or an admin"
  }, {
    src: "/images/viral/viral_settings_page_change_email_fail.png",
    alt: "Settings Page: Failed attempt to change the account email due to non-matching input."
  }, {
    src: "/images/viral/viral_settings_page_change_password_fail.png",
    alt: "Settings Page: Failed attempt to change the account password due to non-matching input."
  }, {
    src: "/images/viral/viral_settings_page_change_password_success.png",
    alt: "Settings Page: Successfully changing the password."
  }, {
    src: "/images/viral/viral_profile_page_mod_posts.png",
    alt: "Profile Page: Recent Posts"
  }, {
    src: "/images/viral/viral_profile_page_user_posts.png",
    alt: "Profile Page: Recent Posts"
  }, {
    src: "/images/viral/viral_create_post_page.png",
    alt: "Create Post Page (Scrolled to the top)"
  }, {
    src: "/images/viral/viral_create_post_page_2.png",
    alt: "Create Post Page (Scrolled to the bottom)"
  }, {
    src: "/images/viral/viral_post_page_edit_post.png",
    alt: "Post Page: Showing options to delete or edit if the signed-in user is the uploader or an admin."
  }, {
    src: "/images/viral/viral_post_page_delete.png",
    alt: "Post Page: Confirmation to delete a post uploaded by the signed-in user."
  }, {
    src: "/images/viral/viral_post_page_deleted.png",
    alt: "Post Page: Upon post deletion, links now show the status of 404."
  }, {
    src: "/images/viral/viral_post_page.png",
    alt: "Post Page: Showing post details and commentary."
  }, {
    src: "/images/viral/viral_post_page_linked_comment.png",
    alt: "Post Page: Page loaded from a link a user has shared targeting a specific comment."
  }, {
    src: "/images/viral/viral_post_page_comment_reply.png",
    alt: "Post Page: Writing a comment."
  }, {
    src: "/images/viral/viral_post_page_comment_reply_preview.png",
    alt: "Post Page: Previewing a comment rendered using Markdown before submitting."
  }, {
    src: "/images/viral/viral_users_page.png",
    alt: "Users Page: Viewing all registered users (Only accessible by an Admin)."
  }
];

export const VIRAL: Project = {
  name: 'Viral',
  link: 'https://github.com/devinsterling/Viral',
  languages: [language.TYPESCRIPT],
  technologies: [technology.NODEJS, technology.REACTJS, technology.BOOTSTRAP],
  introduction: 'Expressive social media platform based on Reddit utilizing Markdown.',
  synopsis:
    `Through an intuitive interface, guests can search, browse profiles, see recent/popular posts, and view commentary.
     Registered users can bookmark, upload posts, comment, and alter their settings (username, email, password, bio, and profile picture). 
     Admins possess a ban hammer to moderate user content, removing posts and users at will.
     Uses privileged entry points using tokens to stop malicious users from accessing restricted information.`,
  thumbnail: images[16],
  images,
};

export default VIRAL;