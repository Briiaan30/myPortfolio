import { useEffect, useRef, useState } from "react";
import { projects } from "../data/profile";
import Icon from "./Icon";
import ProjectPreview from "./ProjectPreview";

function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [project]);

  if (!project) return null;

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }}>
      <div className="project-dialog__content">
        <div className="project-dialog__top"><span className="eyebrow">Caso de estudio / {project.number}</span><button type="button" className="icon-button" aria-label="Cerrar caso de estudio" onClick={() => dialogRef.current.close()} autoFocus><Icon name="close" /></button></div>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p className="project-dialog__intro">{project.description}</p>
        <ul className="tags" aria-label="Tecnologías del proyecto">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <div className="project-dialog__summary"><div><h3>El desafío</h3><p>{project.problem}</p></div><div><h3>La solución</h3><p>{project.solution}</p></div></div>
        <h3 className="project-dialog__subtitle">Decisiones de desarrollo</h3>
        <ol className="project-decisions">{project.decisions.map((decision) => <li key={decision.title}><h4>{decision.title}</h4><p>{decision.description}</p></li>)}</ol>
        <div className="project-dialog__footer"><span><span className="status-dot" />Estás explorando este proyecto ahora.</span><button type="button" className="text-link" onClick={() => dialogRef.current.close()}>Volver al portfolio <Icon name="arrow" size={17} /></button></div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section projects-section" id="proyectos" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow"><span>01 /</span> Trabajo en foco</p><h2 id="projects-title">Menos decir.<br /><em>Más construir.</em></h2></div><p>Cada proyecto es una oportunidad para conectar diseño, lógica y una experiencia que tenga sentido.</p></div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__visual"><ProjectPreview /></div>
              <div className="project-card__content">
                <div className="project-card__meta"><span>PROYECTO {project.number}</span><span>Personal</span></div>
                <p className="project-card__category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <ul className="tags" aria-label={"Tecnologías de " + project.name}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <div className="project-card__links">
                  <button type="button" className="text-link" aria-haspopup="dialog" onClick={() => setSelectedProject(project)}>Ver caso de estudio <Icon name="diagonal" size={19} /></button>
                  {project.github && <a href={project.github} className="text-link" target="_blank" rel="noopener noreferrer">Código <Icon name="github" size={17} /><span className="sr-only"> (abre en una nueva pestaña)</span></a>}
                  {project.demo && <a href={project.demo} className="text-link" target="_blank" rel="noopener noreferrer">Demo <Icon name="diagonal" size={17} /><span className="sr-only"> (abre en una nueva pestaña)</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-footnote"><span className="status-dot" />El portfolio también es parte del trabajo: podés explorar sus decisiones técnicas.</p>
      </div>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
