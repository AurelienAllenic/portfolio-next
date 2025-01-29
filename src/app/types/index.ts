type JsonArray = (string | null)[];

interface Project {
    id: number;
    image: string;
    title: string;  
    description: string;
    category: string;
    objectifs?: string; 
    technologies: string[]; 
    result: string;
  }
  
  
  

interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
}

export type { Project, Contact };