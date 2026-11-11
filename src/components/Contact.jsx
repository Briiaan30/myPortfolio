import { profile, whatsappUrl } from "../data/profile";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section className="section contact-section container" id="contacto" aria-labelledby="contact-title">
      <div className="contact-section__top">
        <p className="eyebrow"><span>04 /</span> El próximo paso</p>
        <span className="availability"><span />Abierto a oportunidades</span>
      </div>
      <div className="contact-layout">
        <div>
          <h2 id="contact-title">El próximo proyecto<br />puede empezar con<br /><em>una conversación.</em></h2>
          <p>¿Buscás un desarrollador JavaScript Junior o Full Stack para tu equipo? Me gustaría conocer el desafío y contarte cómo puedo aportar.</p>
          <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Hablemos por WhatsApp <Icon name="whatsapp" size={20} />
            <span className="sr-only"> (abre en una nueva pestaña)</span>
          </a>
        </div>
        <div className="contact-details">
          <a href={whatsappUrl} className="contact-method" target="_blank" rel="noopener noreferrer">
            <span className="contact-method__icon"><Icon name="whatsapp" size={23} /></span>
            <span><small>ESCRIBIME POR WHATSAPP</small><strong>{profile.whatsappLabel}</strong></span>
            <Icon name="diagonal" size={19} />
            <span className="sr-only"> (abre en una nueva pestaña)</span>
          </a>
          <a href={profile.linkedin} className="contact-method" target="_blank" rel="noopener noreferrer">
            <span className="contact-method__icon"><Icon name="linkedin" size={23} /></span>
            <span><small>CONECTEMOS</small><strong>Encontrame en LinkedIn</strong></span>
            <Icon name="diagonal" size={19} />
            <span className="sr-only"> (abre en una nueva pestaña)</span>
          </a>
          {profile.github && (
            <a href={profile.github} className="contact-method" target="_blank" rel="noopener noreferrer">
              <span className="contact-method__icon"><Icon name="github" size={23} /></span>
              <span><small>CÓDIGO</small><strong>Mi perfil en GitHub</strong></span>
              <Icon name="diagonal" size={19} />
              <span className="sr-only"> (abre en una nueva pestaña)</span>
            </a>
          )}
          {profile.resume && (
            <a className="text-link contact-resume" href={profile.resume} download>
              Descargar CV <Icon name="down" size={17} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
