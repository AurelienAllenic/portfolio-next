"use client";

import { FC, useEffect, useState } from "react";
import { fetchProjects } from "../api/action";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Project } from "../types";
import Header from "../components/Header/Header";
import Footer from "../components/footer";
import "./styles.scss";

const Projects: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        if (!Array.isArray(data)) throw new Error("Invalid data format");

        console.log("Fetched Projects:", data);

        const formattedData: Project[] = data.map((project) => ({
          id: project.id,
          image: project.image,
          title: project.title || `Projet ${project.id}`,
          description: project.description || "Pas de description disponible.",
          category: typeof project.category === "string" ? project.category : "Autre",
          objectifs: project.objectifs || "Aucun objectif spécifié.",
          technologies: Array.isArray(project.technologies)
            ? project.technologies.filter((tech): tech is string => typeof tech === "string")
            : [],
          result: project.result,
        }));

        setProjects(formattedData);
        setFilteredProjects(formattedData);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Échec du chargement des projets");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    if (selectedTechnology) {
      filtered = filtered.filter((project) =>
        Array.isArray(project.technologies) && project.technologies.includes(selectedTechnology)
      );
    }
    

    if (selectedCategory) {
      filtered = filtered.filter(
        (project) => project.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProjects(filtered);
  }, [selectedTechnology, selectedCategory, projects]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  const allCategories = Array.from(
    new Set(
      projects.map((project) => (typeof project.category === "string" ? project.category : "Autre"))
    )
  );
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap((project) =>
        Array.isArray(project.technologies)
          ? project.technologies.filter((tech): tech is string => typeof tech === "string")
          : []
      )
    )
  );

  return (
    <>
      <Header />
      <div className="container-page-all-projects">
        <h1>Nos réalisations</h1>

        <div className="filters">
          <div className="custom-select">
            <select
              onChange={(e) => setSelectedTechnology(e.target.value)}
              value={selectedTechnology || ""}
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
              value={selectedCategory || ""}
            >
              <option value="">Catégorie</option>
              {allCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="container__all__projects">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`project/${project.id}`}
              className="card"
              style={{ backgroundImage: `url(${project.image})` }}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={true}
            >
              <div className={`hover`}>
                <div className={"realisationButton"}>
                  <ArrowUpRight size={24} />
                </div>
                <p className="project-title">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
