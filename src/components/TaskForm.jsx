import { useState } from 'react'

/**
 * Componente TaskForm
 * 
 * Este componente se encarga de manejar el formulario para agregar nuevas tareas.
 * Contiene un campo de texto y un botón para enviar la nueva tarea.
 * 
 * Props:
 * - onAddTask: función que se ejecuta cuando se agrega una nueva tarea
 */
function TaskForm({ onAddTask }) {
  // Estado local para manejar el texto del input
  const [newTask, setNewTask] = useState('')

  /**
   * Maneja el envío del formulario
   * Previene el comportamiento por defecto y llama a onAddTask
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Solo agregar si hay texto (sin espacios vacíos)
    if (newTask.trim()) {
      onAddTask(newTask.trim())
      setNewTask('') // Limpiar el campo después de agregar
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Agregar Nueva Tarea
      </h2>
      
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe tu tarea aquí..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          maxLength={100}
        />
        
        <button
          type="submit"
          disabled={!newTask.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Agregar
        </button>
      </form>
      
      {/* Contador de caracteres */}
      <div className="mt-2 text-sm text-gray-500 text-right">
        {newTask.length}/100 caracteres
      </div>
    </div>
  )
}

export default TaskForm
