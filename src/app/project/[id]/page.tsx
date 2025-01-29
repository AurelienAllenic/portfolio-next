'use client';

import { FC, useEffect, useState } from 'react';
import { getOneProject } from '../../api/action';
import { Project } from '../../types';
import { use } from 'react';
import Footer from '@/app/components/footer';

interface ProjectPageProps {
  params: { id: string };
}

const ProjectDetail: FC<ProjectPageProps> = ({ params }) => {
  const { id } = use(params);

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (id) {
        try {
          const data = await getOneProject(Number(id));
          setProject(data);
        } catch (err) {
          setError('Failed to fetch project');
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
    <div className='project-detail' style={{ backgroundImage: `url(${project.image})` }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.objectifs}</p>
      <p><strong>Technologies:</strong>{project.technologies && JSON.stringify(project.technologies).replace(/[\[\]"]+/g, '')}</p> 
      <p><strong>Category:</strong> {project.category}</p>
      <p><strong>Result:</strong> {project.result}</p>
    </div>

    <Footer />
  </>
  );
};

export default ProjectDetail;
