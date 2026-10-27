import Container from "@/components/ui/Container";
import BrandIcon from "@/components/ui/BrandIcon";
import { site } from "@/config/site";

const socialLinks = ["github", "linkedin", "medium"];

export default function Footer() {
  return <footer className="footer"><Container className="footer-inner">
    <span className="footer-copyright">© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
    <nav className="footer-socials" aria-label="Social media links">
      {socialLinks.map((name) => <a key={name} href={site.links[name]} aria-label={name} target="_blank" rel="noreferrer"><BrandIcon name={name}/></a>)}
    </nav>
  </Container></footer>;
}
