import { profile } from "../data/profile";
import Icon from "./Icon";

const approach = [
  { number: "01", title: "Entender primero.", description: "Qué problema hay que resolver, para quién y qué hace que una solución sea útil." },
  { number: "02", title: "Conectar las piezas.", description: "Pensar la interfaz y la lógica como partes de una misma experiencia." },
  { number: "03", title: "Mejorar en cada paso.", description: "Revisar los detalles, escuchar feedback y seguir aprendiendo al construir." },
];

export default function About() {
  return (
    <section className="section about-section container" id="sobre-mi" aria-labelledby="about-title">
      <div className="about-section__intro"><p className="eyebrow"><span>02 /</span> Detrás del código</p><h2 id="about-title">Curiosidad para aprender.<br /><em>Criterio para construir.</em></h2></div>
      <div className="about-layout">
        <div className="about-profile">
          <div className="about-profile__monogram" aria-hidden="true">b<span>.</span><span className="about-profile__asterisk">✳</span></div>
          <span className="about-profile__name">{profile.name}</span>
          <span className="about-profile__role">JavaScript & Full Stack</span>
          <a href={profile.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">Conocé mi perfil <Icon name="diagonal" size={17} /><span className="sr-only"> (abre en una nueva pestaña)</span></a>
        </div>
        <div className="about-copy">
          <p className="about-copy__lead">Me interesa lo que pasa entre <strong>“tengo una idea”</strong> y <strong>“esto funciona”.</strong></p>
          <p>Soy Brian, desarrollador web con foco en JavaScript y Python. Me gusta pensar las aplicaciones de forma integral: cómo se usan, cómo funcionan y cómo se pueden mejorar.</p>
          <p>También desarrollo bots conversacionales con BuilderBot y utilizo la API OpenAI para integrar capacidades de inteligencia artificial en mis proyectos.</p>
          <p>Busco una oportunidad como desarrollador JavaScript Junior o Full Stack para aportar a un equipo, aprender de otros y crecer construyendo soluciones reales.</p>
          <div className="about-copy__note"><Icon name="branch" size={20} /><p>Mi próximo paso: un equipo donde el código, la colaboración y el aprendizaje vayan de la mano.</p></div>
        </div>
      </div>
      <div className="approach" aria-label="Mi enfoque de trabajo">{approach.map((item) => <div className="approach__item" key={item.number}><span className="approach__number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></div>)}</div>
    </section>
  );
}
