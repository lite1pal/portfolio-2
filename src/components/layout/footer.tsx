// function Footer() {
//   return (
//     <div className="mx-auto mb-7 mt-36 w-fit text-primary">
//       Designed & Built by Denis Tarasenko
//     </div>
//   );
// }

import SocialMediaIcons from "../socialMediaIcons";

// export default Footer;
function Footer() {
  return (
    <footer className="footer footer-center mt-20 rounded bg-base-200/30 p-10 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <a className="link-hover link">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <SocialMediaIcons />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}

export default Footer;
