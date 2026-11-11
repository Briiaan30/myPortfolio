import { profile } from "../data/profile";
import Icon from "./Icon";

function DeveloperArtwork() {
  return (
    <div className="developer-art" aria-hidden="true">
      <div className="developer-art__grid" />
      <div className="developer-art__top"><span className="tiny-cross">+</span><span>CONSTRUIR. CONECTAR. MEJORAR.</span><span className="tiny-cross">+</span></div>
      <div className="developer-art__orbit developer-art__orbit--one" />
      <div className="developer-art__orbit developer-art__orbit--two" />
      <div className="developer-art__core"><span className="developer-art__bracket">&#123;</span><span className="developer-art__letter">b<span>.</span></span><span className="developer-art__bracket">&#125;</span></div>
      <div className="floating-tag floating-tag--js"><span>JS</span>JavaScript</div>
      <div className="floating-tag floating-tag--react"><Icon name="code" size={17} />React</div>
      <div className="floating-tag floating-tag--python"><span className="python-mark">Py</span>Python</div>
      <div className="developer-art__bottom"><span>FRONTEND <span>↔</span> BACKEND</span><span className="art-status"><i />CÓDIGO CON PROPÓSITO</span></div>
      <span className="developer-art__index">BS / 01</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero container" id="inicio" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="availability"><span />Abierto a oportunidades</p>
        <p className="eyebrow hero__intro">Hola, soy {profile.name}</p>
        <h1 id="hero-title">Ideas claras.<br />Código que<br /><em>funciona.</em></h1>
        <p className="hero__description">Desarrollo experiencias web con JavaScript y Python. También creo bots con BuilderBot e integro la API OpenAI en mis proyectos.</p>
        <div className="hero__actions">
          <a href="#proyectos" className="button button--primary">Explorar mi trabajo <Icon name="down" size={18} /></a>
          <a href={profile.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">Mi LinkedIn <Icon name="diagonal" size={17} /><span className="sr-only"> (abre en una nueva pestaña)</span></a>
        </div>
        <p className="hero__opportunity">Busco sumarme a un equipo como <strong>JavaScript Junior o Full Stack.</strong></p>
      </div>
      <div className="hero__visual"><DeveloperArtwork /><span className="hero__visual-caption"><span>01 — PERFIL</span>Una mirada integral del desarrollo web.</span></div>
      <div className="hero__footer"><span>DEL CONCEPTO A LA INTERFAZ.</span><a href="#proyectos">Seguí explorando <Icon name="down" size={15} /></a></div>
    </section>
  );
}
