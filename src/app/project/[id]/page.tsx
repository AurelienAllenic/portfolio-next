"use client";

import { FC, useEffect, useState } from "react";
import { getOneProject } from "../../api/action";
import { Project } from "../../types";
import Footer from "@/app/components/footer";
import "./styles.scss";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import { ArrowUpRight, LoaderCircle, MoveLeft } from "lucide-react";
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
          setLoading(true);
        } catch {
          setError("Failed to fetch project");
        } finally {
          setLoading(false);
        }
      }
    };

    loadProject();
  }, [id]);

  if (error) return <p className="loading">{error}</p>;

  return (
    <>
      <Header />
      <div className={`load ${!loading ? "load__active" : ""}`}>
        <LoaderCircle />
      </div>

      <div className="container-one-project">
        <div
          style={{ backgroundImage: `url(${project?.image})` }}
          className="image-blur-one-project"
        ></div>
        <div className="gradient_back"></div>
        <div className="project-detail">
          <div className="container__link">
            <Link href="/projects" className="icon__retour">
              <MoveLeft size={25} />
            </Link>
          </div>
          <h1>{project?.title}</h1>
          <p className="category_one_project">{project?.category}</p>
          <Image
            src={project?.image ?? "/default-image.jpg"}
            alt={project?.title ?? "Default Title"}
            width={750}
            height={350}
            priority
          />

          <p className="description_one_project">{project?.objectifs}</p>
          <div className="technologies_one_project">
            {project?.technologies && Array.isArray(project?.technologies) ? (
              project?.technologies
                .filter((tech) => typeof tech === "string")
                .map((tech: string, index: number) => (
                  <span key={index} className="technology-span">
                    {tech}
                  </span>
                ))
            ) : (
              <div>No technologies available</div>
            )}
          </div>
          <p className="description_one_project">{project?.description}</p>
          <a
            className="link_one_project"
            href={project?.result}
            target="_blank"
          >
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
