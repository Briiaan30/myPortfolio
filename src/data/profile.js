export const profile = {
  name: "Brian Sarmiento",
  firstName: "Brian",
  initials: "BS",
  role: "JavaScript & Full Stack Developer",
  whatsapp: "5493516790500",
  whatsappLabel: "+54 9 351 679 0500",
  whatsappMessage: "Hola Brian, vi tu portfolio y me gustaría conversar sobre una oportunidad laboral.",
  linkedin: "https://www.linkedin.com/in/brian-sarmiento-b55aa6192/",
  github: null,
  resume: null,
};

export const whatsappUrl =
  "https://wa.me/" + profile.whatsapp + "?text=" + encodeURIComponent(profile.whatsappMessage);

export const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "El punto de encuentro entre las personas y el código.",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    icon: "layout",
  },
  {
    number: "02",
    title: "Backend",
    description: "Lógica de aplicaciones, bots conversacionales e integración con APIs.",
    technologies: ["Python", "Node.js", "API REST", "BuilderBot", "API OpenAI"],
    icon: "terminal",
  },
  {
    number: "03",
    title: "Herramientas",
    description: "Una base para organizar el trabajo y seguir aprendiendo.",
    technologies: ["Git", "Vite"],
    icon: "branch",
  },
];

// Agregá únicamente proyectos reales. Los enlaces vacíos no se muestran.
export const projects = [
  {
    id: "portfolio",
    number: "01",
    category: "Diseño + desarrollo frontend",
    title: "Una presentación hecha con código.",
    name: "Portfolio personal",
    description:
      "El sitio que estás recorriendo: una experiencia en React para presentar mi perfil, explorar mi stack y abrir una conversación profesional.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    github: null,
    demo: null,
    problem:
      "Presentar mi perfil de desarrollador de forma clara y facilitar que un equipo conozca mi enfoque técnico y pueda contactarme.",
    solution:
      "Una página organizada alrededor del trabajo, el perfil y las tecnologías, con navegación directa y un diseño que se adapta a cada pantalla.",
    decisions: [
      {
        title: "Componentes con una responsabilidad",
        description:
          "React separa la navegación, las secciones y el detalle del proyecto. El contenido se mantiene en un archivo de datos para facilitar las actualizaciones.",
      },
      {
        title: "Diseño adaptable y accesible",
        description:
          "CSS Grid y Flexbox organizan el contenido. La navegación incluye foco visible, acceso por teclado y respeto por las preferencias de movimiento.",
      },
      {
        title: "Contacto sin pasos de más",
        description:
          "Acceso directo a WhatsApp y LinkedIn, con un mensaje inicial para facilitar el contacto por oportunidades laborales.",
      },
    ],
  },
];
