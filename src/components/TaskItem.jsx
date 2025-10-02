/**
 * Componente TaskItem
 * 
 * Este componente representa una tarea individual en la lista.
 * Muestra el texto de la tarea, un checkbox para marcarla como completada,
 * y un botón para eliminarla.
 * 
 * Props:
 * - task: objeto con la información de la tarea (id, text, completed)
 * - onToggle: función que se ejecuta cuando se marca/desmarca la tarea
 * - onDelete: función que se ejecuta cuando se elimina la tarea
 */
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li 
      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
        task.completed 
          ? 'bg-green-50 border-green-200' 
          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
      }`}
    >
      {/* Checkbox para marcar como completada */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
        aria-label={`Marcar "${task.text}" como ${task.completed ? 'pendiente' : 'completada'}`}
      />
      
      {/* Texto de la tarea */}
      <span 
        className={`flex-1 text-left transition-all duration-200 ${
          task.completed 
            ? 'line-through text-gray-500' 
            : 'text-gray-800'
        }`}
      >
        {task.text}
      </span>
      
      {/* Estado visual de la tarea */}
      <span className={`text-xs px-2 py-1 rounded-full ${
        task.completed 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {task.completed ? 'Completada' : 'Pendiente'}
      </span>
      
      {/* Botón para eliminar */}
      <button
        onClick={() => onDelete(task.id)}
        className="px-3 py-1 text-red-600 hover:bg-red-100 rounded-md transition-colors duration-200 hover:scale-105"
        title={`Eliminar tarea: ${task.text}`}
        aria-label={`Eliminar tarea: ${task.text}`}
      >
        🗑️
      </button>
    </li>
  )
}

export default TaskItem
