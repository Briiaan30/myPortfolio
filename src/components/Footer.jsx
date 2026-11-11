import { profile } from "../data/profile";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__brand" href="#inicio">b<span>.</span><span className="sr-only">{profile.name}, ir al inicio</span></a>
        <p>© {new Date().getFullYear()} {profile.name}<span>Hecho con React y atención al detalle.</span></p>
        <a className="text-link" href="#inicio">Volver arriba <Icon name="down" className="rotate-arrow" size={17} /></a>
      </div>
    </footer>
  );
}
