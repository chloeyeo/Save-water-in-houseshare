import { useTask } from '../../context/task-context';

const Modal = () => {
    const {addTask} = useTask()
    return(
    <div className="w-full h-screen flex items-center justify-center">
     <div className="bg-white rounded p-4 z-30 w-64 h-64">Whats up</div>
     <button onClick={() => addTask()}>
        Add
     </button>
  </div>
)}


export default Modal