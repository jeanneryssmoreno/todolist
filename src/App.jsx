import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

/**
 * Componente principal de la aplicación TodoList
 * 
 * Este es el componente raíz que maneja el estado global de todas las tareas
 * y coordina la comunicación entre los componentes TaskForm y TaskList.
 * 
 * Responsabilidades:
 * - Mantener el estado global de las tareas
 * - Proporcionar funciones para agregar, toggle y eliminar tareas
 * - Renderizar la estructura principal de la aplicación
 */
function App() {
  // Estado principal que almacena todas las tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Crear una TodoList', completed: false },
    { id: 3, text: 'Implementar Tailwind CSS', completed: true }
  ])

  /**
   * Función para agregar una nueva tarea
   * @param {string} taskText - El texto de la nueva tarea
   */
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // ID único basado en timestamp
      text: taskText,
      completed: false
    }
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  /**
   * Función para marcar/desmarcar una tarea como completada
   * @param {number} taskId - ID de la tarea a cambiar
   */
  const toggleTask = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  /**
   * Función para eliminar una tarea
   * @param {number} taskId - ID de la tarea a eliminar
   */
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="min-h-screen py-8" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%), linear-gradient(to bottom, #f8fafc, #e2e8f0)'}}>
      <div className="max-w-2xl mx-auto px-4 animate-fade-in">
        {/* Header de la aplicación */}
        <header className="text-center mb-8 animate-slide-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📝 Mi TodoList
          </h1>
          <p className="text-gray-600 text-lg">
            Organiza tus tareas de manera eficiente con esta aplicación moderna
          </p>
        </header>

        {/* Formulario para agregar nuevas tareas */}
        <div className="animate-slide-in" style={{animationDelay: '0.1s'}}>
          <TaskForm onAddTask={addTask} />
        </div>

        {/* Lista de tareas */}
        <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
          <TaskList 
            tasks={tasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm animate-fade-in" style={{animationDelay: '0.3s'}}>
          Creado con ❤️ usando React + Vite + Tailwind CSS
        </footer>
      </div>
    </div>
  )
}

export default App
