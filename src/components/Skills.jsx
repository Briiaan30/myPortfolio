import { skillGroups } from "../data/profile";
import Icon from "./Icon";

export default function Skills() {
  return (
    <section className="section stack-section" id="habilidades" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow"><span>03 /</span> Mi caja de herramientas</p><h2 id="skills-title">Un stack conectado.<br /><em>Una visión completa.</em></h2></div><p>De lo que se ve a lo que sucede detrás. Estas son las tecnologías que forman parte de mi enfoque de desarrollo.</p></div>
        <div className="skill-groups">{skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group__top"><Icon name={group.icon} size={28} /><span>{group.number}</span></div>
            <h3>{group.title}</h3><p>{group.description}</p>
            <ul className="tags" aria-label={"Tecnologías de " + group.title}>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </article>
        ))}</div>
        <div className="stack-section__footer"><span className="stack-section__symbol" aria-hidden="true">&#123; &#125;</span><p>Las herramientas cambian.<br /><strong>Las ganas de entender cómo funcionan, se quedan.</strong></p><span className="eyebrow">SIEMPRE APRENDIENDO <Icon name="diagonal" size={17} /></span></div>
      </div>
    </section>
  );
}
