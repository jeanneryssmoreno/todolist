import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('renderiza la aplicación correctamente', () => {
    render(<App />)
    
    expect(screen.getByText('📝 Mi TodoList')).toBeInTheDocument()
    expect(screen.getByText('Organiza tus tareas de manera eficiente con esta aplicación moderna')).toBeInTheDocument()
    expect(screen.getByText('Agregar Nueva Tarea')).toBeInTheDocument()
    expect(screen.getByText('Mis Tareas')).toBeInTheDocument()
  })

  it('muestra las tareas iniciales', () => {
    render(<App />)
    
    expect(screen.getByText('Aprender React')).toBeInTheDocument()
    expect(screen.getByText('Crear una TodoList')).toBeInTheDocument()
    expect(screen.getByText('Implementar Tailwind CSS')).toBeInTheDocument()
  })

  it('permite agregar una nueva tarea', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    const button = screen.getByText('Agregar')
    
    await user.type(input, 'Nueva tarea de prueba')
    await user.click(button)
    
    expect(screen.getByText('Nueva tarea de prueba')).toBeInTheDocument()
  })

  it('permite marcar una tarea como completada', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Buscar la tarea "Aprender React" y su checkbox
    const taskText = screen.getByText('Aprender React')
    const taskItem = taskText.closest('li')
    const checkbox = taskItem.querySelector('input[type="checkbox"]')
    
    expect(checkbox).not.toBeChecked()
    
    await user.click(checkbox)
    
    expect(checkbox).toBeChecked()
    expect(taskText).toHaveClass('line-through')
  })

  it('permite eliminar una tarea', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Verificar que la tarea existe
    expect(screen.getByText('Aprender React')).toBeInTheDocument()
    
    // Buscar el botón de eliminar para "Aprender React"
    const deleteButton = screen.getByTitle('Eliminar tarea: Aprender React')
    await user.click(deleteButton)
    
    // Verificar que la tarea ya no existe
    expect(screen.queryByText('Aprender React')).not.toBeInTheDocument()
  })

  it('actualiza las estadísticas correctamente', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Estado inicial: 1 completada de 3 (33%)
    expect(screen.getByText('33% completado')).toBeInTheDocument()
    
    // Marcar otra tarea como completada
    const taskText = screen.getByText('Aprender React')
    const taskItem = taskText.closest('li')
    const checkbox = taskItem.querySelector('input[type="checkbox"]')
    
    await user.click(checkbox)
    
    // Ahora debería ser 2 completadas de 3 (67%)
    expect(screen.getByText('67% completado')).toBeInTheDocument()
  })

  it('integración completa: agregar, completar y eliminar tareas', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Agregar nueva tarea
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    const addButton = screen.getByText('Agregar')
    
    await user.type(input, 'Tarea de integración')
    await user.click(addButton)
    
    // Verificar que se agregó
    expect(screen.getByText('Tarea de integración')).toBeInTheDocument()
    
    // Marcar como completada
    const newTaskText = screen.getByText('Tarea de integración')
    const newTaskItem = newTaskText.closest('li')
    const newCheckbox = newTaskItem.querySelector('input[type="checkbox"]')
    
    await user.click(newCheckbox)
    
    // Verificar que está completada
    expect(newCheckbox).toBeChecked()
    expect(newTaskText).toHaveClass('line-through')
    
    // Eliminar la tarea
    const deleteButton = screen.getByTitle('Eliminar tarea: Tarea de integración')
    await user.click(deleteButton)
    
    // Verificar que se eliminó
    expect(screen.queryByText('Tarea de integración')).not.toBeInTheDocument()
  })

  it('no permite agregar tareas vacías', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const input = screen.getByPlaceholderText('Escribe tu tarea aquí...')
    const button = screen.getByText('Agregar')
    
    // Intentar agregar tarea vacía
    await user.click(button)
    
    // El botón debería estar deshabilitado
    expect(button).toBeDisabled()
    
    // Intentar con espacios
    await user.type(input, '   ')
    expect(button).toBeDisabled()
  })
})
