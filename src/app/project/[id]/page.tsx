"use client";

import { FC, useEffect, useState } from "react";
import { getOneProject } from "../../api/action";
import { Project } from "../../types";
import { use } from "react";
import Footer from "@/app/components/footer";
import "./styles.scss";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import { ArrowUpRight, MoveLeft } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface ProjectPageProps {
  params: { id: string };
}

const ProjectDetail: FC<ProjectPageProps> = () => {
  const { id } = useParams();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (id) {
        try {
          const data = await getOneProject(Number(id));
          setProject(data);
        } catch {
          setError("Failed to fetch project");
        } finally {
          setLoading(false);
        }
      }
    };

    loadProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <>
      <Header />
      <div className="container-one-project">
        <div
          style={{ backgroundImage: `url(${project.image})` }}
          className="image-blur-one-project"
        ></div>
        <div className="gradient_back"></div>
        <div className="project-detail">
          <div className="container__link">
            <Link href="/projects" className="icon__retour">
              <MoveLeft size={25} />
            </Link>
          </div>
          <h1>{project.title}</h1>
          <p className="category_one_project">{project.category}</p>
          <Image
            src={project.image}
            alt={project.title ?? "Default Title"}
            width={750}
            height={350}
            priority
          />

          <p className="description_one_project">{project.objectifs}</p>
          <p className="technologies_one_project">
            {project.technologies && Array.isArray(project.technologies) ? (
              project.technologies
                .filter((tech) => typeof tech === "string")
                .map((tech: string, index: number) => (
                  <span key={index} className="technology-span">
                    {tech}
                  </span>
                ))
            ) : (
              <p>No technologies available</p>
            )}
          </p>
          <p className="description_one_project">{project.description}</p>
          <a className="link_one_project" href={project.result} target="_blank">
            <span>Visiter le site</span>
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
