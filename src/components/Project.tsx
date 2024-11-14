import { ExternalLink, Github } from 'lucide-react';
import {gradientTitle} from "../style.ts";

const projects = [
  {
    id: 1,
    title: "Chef's Compass",
    description: "Application Angular et Spring créée avec l'équipe Hackmasters",
    image: "assets/img/chef-compass.png",
    link: "Application Angular et Spring créée avec l'équipe Hackmasters",
    tags: ["Angular", "Spring"]
  },
  {
    id: 2,
    title: "OhMyFood",
    description: "Projet créé en autodidacte dans le but d'approfondir mes connaissances en SCSS et HTML",
    image: "assets/img/ohmyfood.png",
    link: "Projet créé en autodidacte dans le but d'approfondir mes connaissances en SCSS et HTML",
    tags: ["HTML", "Scss", "Animation"]
  },
  {
    id: 3,
    title: "Digidex",
    description: "Apllication qui utilise l'API dapi pour Redistribuer les données des Digimons ",
    image: "assets/img/digidex.png",
    link: "https://github.com/remy-rm/digidex",
    tags: ["Spring", "API"]
  }
];

// @ts-ignore
// @ts-ignore
const ProjectCard = ({ project }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-frandroid-blue/10 text-frandroid-blue rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-frandroid-blue hover:text-frandroid-pink transition-colors"
      >
        <ExternalLink size={20} />
        <span>Voir le projet</span>
      </a>
    </div>
  </article>
);

const Project = () => {
  return (
      <section className="py-16 md:py-24 bg-gray-100" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 ${gradientTitle}`}>Mes Projets</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
            <a
                href="https://github.com/remy-rm/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-lg flex flex-col items-center justify-center p-8 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Github size={48} className="mb-4 text-frandroid-blue"/>
              <span className="text-lg font-medium">Plus de projets sur GitHub</span>
            </a>
          </div>
        </div>
        </section>
          );
          };

          export default Project;