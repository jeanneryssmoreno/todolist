import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskList from '../TaskList'

describe('TaskList', () => {
  const mockTasks = [
    { id: 1, text: 'Tarea 1', completed: false },
    { id: 2, text: 'Tarea 2', completed: true },
    { id: 3, text: 'Tarea 3', completed: false }
  ]

  const emptyTasks = []

  it('renderiza la lista de tareas correctamente', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskList 
        tasks={mockTasks}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    expect(screen.getByText('Mis Tareas')).toBeInTheDocument()
    expect(screen.getByText('3 tareas')).toBeInTheDocument()
    expect(screen.getByText('Tarea 1')).toBeInTheDocument()
    expect(screen.getByText('Tarea 2')).toBeInTheDocument()
    expect(screen.getByText('Tarea 3')).toBeInTheDocument()
  })

  it('muestra mensaje cuando no hay tareas', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskList 
        tasks={emptyTasks}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    expect(screen.getByText('No tienes tareas pendientes')).toBeInTheDocument()
    expect(screen.getByText('¡Agrega una nueva tarea para comenzar!')).toBeInTheDocument()
  })

  it('calcula y muestra estadísticas correctamente', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskList 
        tasks={mockTasks}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    // Verificar estadísticas: 1 completada de 3 = 33%
    expect(screen.getByText('33% completado')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument() // Total
    expect(screen.getByText('1')).toBeInTheDocument() // Completadas
    expect(screen.getByText('2')).toBeInTheDocument() // Pendientes
  })

  it('muestra la barra de progreso correctamente', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskList 
        tasks={mockTasks}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    const progressBar = screen.getByText('33% completado').parentElement.nextElementSibling.firstElementChild
    expect(progressBar).toHaveStyle({ width: '33%' })
  })

  it('maneja correctamente el singular/plural en el contador', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    const singleTask = [{ id: 1, text: 'Una sola tarea', completed: false }]
    
    render(
      <TaskList 
        tasks={singleTask}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    expect(screen.getByText('1 tarea')).toBeInTheDocument()
  })

  it('pasa las props correctas a TaskItem', async () => {
    const user = userEvent.setup()
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskList 
        tasks={mockTasks}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    // Hacer clic en el primer checkbox
    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[0])
    
    expect(mockOnToggle).toHaveBeenCalledWith(1)
    
    // Hacer clic en el primer botón de eliminar
    const deleteButtons = screen.getAllByTitle(/Eliminar tarea/)
    await user.click(deleteButtons[0])
    
    expect(mockOnDelete).toHaveBeenCalledWith(1)
  })

  it('no muestra barra de progreso cuando no hay tareas', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskList 
        tasks={emptyTasks}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    expect(screen.queryByText('Progreso')).not.toBeInTheDocument()
  })

  it('calcula 100% cuando todas las tareas están completadas', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    const allCompleted = [
      { id: 1, text: 'Tarea 1', completed: true },
      { id: 2, text: 'Tarea 2', completed: true }
    ]
    
    render(
      <TaskList 
        tasks={allCompleted}
        onToggleTask={mockOnToggle}
        onDeleteTask={mockOnDelete}
      />
    )
    
    expect(screen.getByText('100% completado')).toBeInTheDocument()
  })
})
