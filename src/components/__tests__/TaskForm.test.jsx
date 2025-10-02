import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskForm from '../TaskForm'

describe('TaskForm', () => {
  it('renderiza correctamente', () => {
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    expect(screen.getByText('Agregar Nueva Tarea')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Escribe tu tarea aquí...')).toBeInTheDocument()
    expect(screen.getByText('Agregar')).toBeInTheDocument()
  })

  it('permite escribir en el input', async () => {
    const user = userEvent.setup()
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    await user.type(input, 'Nueva tarea de prueba')
    
    expect(input).toHaveValue('Nueva tarea de prueba')
  })

  it('llama a onAddTask cuando se envía el formulario', async () => {
    const user = userEvent.setup()
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    const button = screen.getByText('Agregar')
    
    await user.type(input, 'Nueva tarea')
    await user.click(button)
    
    expect(mockOnAddTask).toHaveBeenCalledWith('Nueva tarea')
  })

  it('limpia el input después de enviar', async () => {
    const user = userEvent.setup()
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    const button = screen.getByText('Agregar')
    
    await user.type(input, 'Nueva tarea')
    await user.click(button)
    
    expect(input).toHaveValue('')
  })

  it('no permite enviar tareas vacías', async () => {
    const user = userEvent.setup()
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    const button = screen.getByText('Agregar')
    
    // El botón debe estar deshabilitado inicialmente
    expect(button).toBeDisabled()
    
    // Intentar enviar con espacios vacíos
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    await user.type(input, '   ')
    
    expect(button).toBeDisabled()
    expect(mockOnAddTask).not.toHaveBeenCalled()
  })

  it('muestra el contador de caracteres', async () => {
    const user = userEvent.setup()
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    
    expect(screen.getByText('0/100 caracteres')).toBeInTheDocument()
    
    await user.type(input, 'Hola')
    expect(screen.getByText('4/100 caracteres')).toBeInTheDocument()
  })

  it('maneja el envío con Enter', () => {
    const mockOnAddTask = vi.fn()
    render(<TaskForm onAddTask={mockOnAddTask} />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    
    fireEvent.change(input, { target: { value: 'Tarea con Enter' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    fireEvent.submit(input.closest('form'))
    
    expect(mockOnAddTask).toHaveBeenCalledWith('Tarea con Enter')
  })
})
