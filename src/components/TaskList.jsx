import TaskItem from './TaskItem'

/**
 * Componente TaskList
 * 
 * Este componente se encarga de mostrar la lista completa de tareas.
 * Renderiza cada tarea usando el componente TaskItem y muestra estadísticas.
 * 
 * Props:
 * - tasks: array con todas las tareas
 * - onToggleTask: función para marcar/desmarcar tareas como completadas
 * - onDeleteTask: función para eliminar tareas
 */
function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  // Calcular estadísticas
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = tasks.filter(task => !task.completed).length
  const completionPercentage = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header con título y contador */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Mis Tareas
        </h2>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {tasks.length} {tasks.length === 1 ? 'tarea' : 'tareas'}
        </span>
      </div>
      
      {/* Barra de progreso */}
      {tasks.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progreso</span>
            <span>{completionPercentage}% completado</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Lista de tareas o mensaje vacío */}
      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-500 text-lg mb-2">
            No tienes tareas pendientes
          </p>
          <p className="text-gray-400 text-sm">
            ¡Agrega una nueva tarea para comenzar!
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      )}
      
      {/* Estadísticas detalladas */}
      {tasks.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">{tasks.length}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
              <div className="text-sm text-gray-600">Completadas</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-600">{pendingTasks}</div>
              <div className="text-sm text-gray-600">Pendientes</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList
