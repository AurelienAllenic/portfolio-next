"use client";

import { FC, useEffect, useState } from "react";
import { fetchProjects } from "../api/action";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // Icône Lucide
import { Project } from "../types";
import Header from "../components/Header/Header";
import "./styles.scss"; // Assure-toi que les styles sont bien importés

const Projects: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (selectedTechnology) {
      filtered = filtered.filter((project) =>
        project.technologies.includes(selectedTechnology)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (project) =>
          project.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProjects(filtered);
  }, [selectedTechnology, selectedCategory, projects]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const allCategories = Array.from(
    new Set(projects.map((project) => project.category))
  );
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  const handleMouseEnter = (id: number) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <>
      <Header />
      <div className="container-page-all-projects">
        <h1>Nos réalisations</h1>

        <div className="filters">
          <div className="custom-select">
            <select
              onChange={(e) => setSelectedTechnology(e.target.value)}
              value={selectedTechnology}
            >
              <option value="">Technologie</option>
              {allTechnologies.map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>

          <div className="custom-select">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="">Categorie</option>
              {allCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <ul className="container-all-projects">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-container">
              <Link
                href={`/project/${project.id}`}
                className="project-link"
                style={{ backgroundImage: `url(${project.image})` }}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`containers-infos-project ${
                    activeProject === project.id ? "active" : "active"
                  }`}
                >
                  <p className="project-title">{project.title}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
