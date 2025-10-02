import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskItem from '../TaskItem'

describe('TaskItem', () => {
  const mockTask = {
    id: 1,
    text: 'Tarea de prueba',
    completed: false
  }

  const mockTaskCompleted = {
    id: 2,
    text: 'Tarea completada',
    completed: true
  }

  it('renderiza una tarea pendiente correctamente', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    expect(screen.getByText('Tarea de prueba')).toBeInTheDocument()
    expect(screen.getByText('Pendiente')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renderiza una tarea completada correctamente', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskItem 
        task={mockTaskCompleted} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    expect(screen.getByText('Tarea completada')).toBeInTheDocument()
    expect(screen.getByText('Completada')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('llama a onToggle cuando se hace clic en el checkbox', async () => {
    const user = userEvent.setup()
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    
    expect(mockOnToggle).toHaveBeenCalledWith(1)
  })

  it('llama a onDelete cuando se hace clic en el botón eliminar', async () => {
    const user = userEvent.setup()
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    const deleteButton = screen.getByTitle('Eliminar tarea: Tarea de prueba')
    await user.click(deleteButton)
    
    expect(mockOnDelete).toHaveBeenCalledWith(1)
  })

  it('aplica estilos diferentes para tareas completadas', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    const { rerender } = render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    const taskText = screen.getByText('Tarea de prueba')
    expect(taskText).toHaveClass('text-gray-800')
    expect(taskText).not.toHaveClass('line-through')
    
    // Cambiar a tarea completada
    rerender(
      <TaskItem 
        task={mockTaskCompleted} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    const completedTaskText = screen.getByText('Tarea completada')
    expect(completedTaskText).toHaveClass('line-through', 'text-gray-500')
  })

  it('tiene atributos de accesibilidad correctos', () => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-label', 'Marcar "Tarea de prueba" como completada')
    
    const deleteButton = screen.getByRole('button')
    expect(deleteButton).toHaveAttribute('aria-label', 'Eliminar tarea: Tarea de prueba')
  })
})
