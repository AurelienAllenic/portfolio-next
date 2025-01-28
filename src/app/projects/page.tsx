'use client';

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

    return (
    <div className='container-page-all-projects'>
        <h1>Projets</h1>

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
            <Link
                href={`/project/${project.id}`}
                key={project.id}
                style={{ background: `url(${project.image}) no-repeat center center / cover` }}
            >
                <p className='project-title'>{project.title}</p>
                <p className='project-description'>{project.description}</p>
            </Link>
        ))}
        </ul>
    </div>
    );
};

export default Projects;
