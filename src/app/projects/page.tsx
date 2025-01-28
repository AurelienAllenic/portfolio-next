'use client'; // Indiquer que ce composant est côté client

import { FC, useEffect, useState } from 'react';
import { fetchProjects } from '../api/action';
import Link from 'next/link';
import './styles.scss';
import { Project } from '../types';

const Projects: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const [selectedTechnology, setSelectedTechnology] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const [activeProject, setActiveProject] = useState<number | null>(null);  // État pour suivre le projet survolé

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (selectedTechnology) {
      filtered = filtered.filter(project =>
        project.technologies.includes(selectedTechnology)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(project =>
        project.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProjects(filtered);
  }, [selectedTechnology, selectedCategory, projects]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const allCategories = Array.from(new Set(projects.map(project => project.category)));
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const handleMouseEnter = (id: number) => {
    setActiveProject(id);  // Ajoute la classe active en fonction de l'id du projet
  };

  const handleMouseLeave = () => {
    setActiveProject(null);  // Enlève la classe active lorsqu'on sort de la carte
  };

  return (
    <div className='container-page-all-projects'>
      <h1>Nos réalisations</h1>

      <div className='filters'>
        <select
          onChange={(e) => setSelectedTechnology(e.target.value)}
          value={selectedTechnology}
        >
          <option value=''>Select Technology</option>
          {allTechnologies.map((tech, index) => (
            <option key={index} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value=''>Select Category</option>
          {allCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ul className='container-all-projects'>
        {filteredProjects.map((project) => (
          <div key={project.id} className='project-container'>
            {/* Div avec image floutée */}

            {/* Div avec contenu visible */}
            <Link
              href={`/project/${project.id}`}
              className='project-link'
              style={{ backgroundImage: `url(${project.image})` }} // L'image visible ici
              onMouseEnter={() => handleMouseEnter(project.id)} // Ajouter la classe active
              onMouseLeave={handleMouseLeave} // Retirer la classe active
            >
              <div
                className={`containers-infos-project ${activeProject === project.id ? 'active' : 'active'}`}
              >
                <p className='project-title'>{project.title}</p>
                <p className='project-description'>{project.description}</p>
              </div>
            </Link>
          </div>  
        ))}
      </ul>
    </div>
  );
};

export default Projects;
