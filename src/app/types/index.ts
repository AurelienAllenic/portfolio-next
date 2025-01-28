interface Project {
    id: number;
    image: string;
    title: string;
    description:string;
    category:  string;
    objectifs: string;
    technologies: JSON;
    result:  string;
}

interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
}

export type { Project, Contact };