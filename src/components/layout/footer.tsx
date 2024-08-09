import SocialMediaIcons from "../socialMediaIcons";

function Footer() {
  return (
    <footer className="footer footer-center mt-20 self-end rounded border border-t p-10 text-base-content">
      <div className="flex w-full justify-between">
        <aside>
          <p>Copyright © 2024 - Denis Tarasenko</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <SocialMediaIcons />
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
