import Logo from "../Logo";
import SocialIcon from "./SocialIcon";
import youtube from "../../../../public/svg/youtube.svg";
import instagram from "../../../../public/svg/instagram.svg";
import facebook from "../../../../public/svg/facebook.svg";
import x from "../../../../public/svg/x.svg";

const footerLinkClass =
  "hover:text-jade-normal focus:text-jade-normal transition-all duration-150 ease-linear justify-self-start";

function Footer() {
  return (
    <footer className="w-screen animate-[fadeIn_1.2s] bg-almond-normal py-12 shadow-cta-bot">
      <div className="fixed-container flex items-center justify-around mdl:grid mdl:grid-cols-7 mdl:justify-items-center mdl:gap-8 md:grid-cols-1 md:gap-12">
        <div className="flex flex-col items-center text-center mdl:col-span-3 md:col-span-1">
          <Logo />
          <p className="mb-4 mt-3 text-sm">
            KetoDelicious 2023 &copy;. All rights reserved
          </p>
          <nav className="flex justify-between gap-4">
            <SocialIcon
              image={facebook}
              name="Facebook"
              href="https://www.facebook.com/"
            />
            <SocialIcon
              image={instagram}
              name="Instagram"
              href="https://www.instagram.com/"
            />
            <SocialIcon
              image={x}
              name="X/Twitter"
              href="https://twitter.com/"
            />
            <SocialIcon
              image={youtube}
              name="Youtube"
              href="https://www.youtube.com/"
            />
          </nav>
        </div>
        <nav className="grid grid-cols-3 gap-x-8 gap-y-4 text-xl lg:grid-cols-2 mdl:col-span-4 mdl:gap-x-2 md:col-span-1 md:row-start-1 md:row-end-2 xsm:text-base xxsm:text-sm">
          <a className={footerLinkClass} href="/">
            About us
          </a>
          <a className={footerLinkClass} href="/">
            Careers
          </a>
          <a className={footerLinkClass} href="/">
            Help Center
          </a>
          <a className={footerLinkClass} href="/">
            Become an affiliate
          </a>
          <a className={footerLinkClass} href="/">
            Privacy Policy
          </a>
          <a className={footerLinkClass} href="/">
            Terms of serbice
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
