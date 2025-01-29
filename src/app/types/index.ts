import { Prisma } from "@prisma/client";

interface Project {
  id: number;
  image: string;
  title?: string;
  description: string;
  category: string;
  objectifs?: string;
  technologies: Prisma.JsonValue;
  result: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
}

export type { Project, Contact };
