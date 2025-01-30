import { render, screen } from '@testing-library/react'
import Projects from './page'
import { vi, describe, it } from 'vitest'
import React from 'react'

vi.mock('../api/action', () => ({
  fetchProjects: vi.fn().mockResolvedValue([
    {
      id: 1,
      image: 'project1.jpg',
      title: 'Project 1',
      description: 'Description 1',
      category: 'Category 1',
      objectifs: 'Objective 1',
      technologies: ['React', 'Node.js'],
      result: 'Result 1',
    },
    {
      id: 2,
      image: 'project2.jpg',
      title: 'Project 2',
      description: 'Description 2',
      category: 'Category 2',
      objectifs: 'Objective 2',
      technologies: ['Vue', 'Node.js'],
      result: 'Result 2',
    },
  ]), 
}))

describe('Projects Component', () => {
  it('should render the technologies dropdown', async () => {
    render(<Projects />)

    const selectElement = screen.getByText('Technologie').closest('select')
    
    expect(selectElement).toBeInTheDocument()
  })
})
