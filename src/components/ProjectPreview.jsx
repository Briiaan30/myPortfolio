export default function ProjectPreview() {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="preview-window">
        <div className="preview-window__bar"><span><i /><i /><i /></span><span>brian / portfolio</span><span>↗</span></div>
        <div className="preview-site">
          <div className="preview-site__nav"><span className="preview-site__brand">b.</span><span>Trabajo &nbsp;&nbsp; Perfil &nbsp;&nbsp; Contacto ↗</span></div>
          <div className="preview-site__hero">
            <div><span className="preview-site__eyebrow">BRIAN SARMIENTO / DEVELOPER</span><p>Ideas claras.<br />Código que<br /><em>funciona.</em></p><span className="preview-site__button">Explorar mi trabajo ↗</span></div>
            <div className="preview-site__art"><span>&#123; b. &#125;</span><i /><i /></div>
          </div>
          <div className="preview-site__footer"><span>JAVASCRIPT</span><span>REACT</span><span>PYTHON</span></div>
        </div>
      </div>
      <div className="preview-note"><span className="preview-note__dot" />Diseñado para cada pantalla<svg width="32" height="34" viewBox="0 0 32 34" fill="none"><path d="M29 2C8 0 6 10 8 25m-6-6 6 11 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
      <div className="preview-mobile"><div className="preview-mobile__speaker" /><span>b.</span><p>Ideas<br />claras.<br /><em>Código<br />que funciona.</em></p><i /><span className="preview-mobile__line" /><span className="preview-mobile__line" /></div>
    </div>
  );
}
