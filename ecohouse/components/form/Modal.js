import { useTask } from '../../context/task-context';
import { useState } from "react"
import { TasksData } from "../../data/tasks"
import { BeakerIcon } from '@heroicons/react/24/solid'

const Modal = () => {
  const { addTask, toggleModal } = useTask();
  const [formState, setFormState] = useState({ value: "Laundry", name: "Laundry", Icon: BeakerIcon });

  const submitTask = () => {
    console.log({ TasksData, formState })
    const Icon = TasksData.find(({ value }) => value === formState.activity).Icon
    addTask(formState.activity, Icon, formState.recurrance, formState.time)
    toggleModal()
  };

  const onChange = (event) => {
    setFormState((current) => ({ ...current, [event.target.id]: event.target.value }))
  }

  return (
    <div className="w-full h-screen flex items-center justify-center modal">
      <div className="bg-white rounded p-4 z-30 w-64 h-84" >
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Add Calendar Event</h5>
        <label for="activity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" >Select activity</label>
        <select id="activity" onChange={onChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {
            TasksData.map(({ name, value }) => (
              <option value={value} key={value}>{name}</option>
            ))
          }
        </select>

        {/* 
        <label for="floatingInput" class="text-sm font-medium text-gray-900">Select a date</label>
        <input type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select a date" /> */}

        <div class="flex ">
          <div class="timepicker relative form-floating mb-3 xl:w-96" data-mdb-with-icon="false" id="input-toggle-timepicker">
            <label for="floatingInput" class="text-sm font-medium text-gray-900">Select a date</label>
            <input type="date"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date" data-mdb-toggle="input-toggle-timepicker" />
          </div>
        </div>


        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" for="recurrence">
          Recurring activity
        </label>
        <select id="recurrence" onChange={onChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="everyday">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="fortnightly">Fornightly</option>
          <option value="monthly">Monthly</option>
        </select>


        <button onClick={() => submitTask()} className="mt-2 z-31 p-6 block add-button modal-footer">
          Add
        </button>


      </div>
    </div>
  )
}


export default Modal