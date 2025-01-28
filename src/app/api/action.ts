"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const fetchProjects = async () => {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    throw new Error(`Unable to fetch projects: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
};


export const getOneProject = async (id: number) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    if (!project) {
      throw new Error('Project not found');
    }

    return project;
  } catch (error) {
    throw new Error(`Unable to fetch the project: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
};
