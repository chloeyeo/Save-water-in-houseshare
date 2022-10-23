import { useTask } from '../../context/task-context';

const Modal = () => {
  const { addTask } = useTask()
  return (
    <div className="w-full h-screen flex items-center justify-center modal">
      <div className="bg-white rounded p-4 z-30 w-64 h-64" >
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Add event</h5>
        <label for="tasks" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" >Select activity</label>
        <select id="activities" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="Laundry">Laundry</option>
          <option value="Wash Dish">Wash Dishes</option>
          <option value="Wash Veg">Wash Fruits and Vegetables</option>
          <option value="Shower">Take Shower</option>
          <option value="Water Plant">Water Plants</option>
          <option value="Make Drink">Make Tea/Coffee</option>
          <option value="Use Oven">Use Oven</option>
          <option value="Vacuum">Vacuum</option>
          <option value="Cook">Cook</option>
          <option value="Boil Kettle">Boil Kettle</option>
          <option value="Shop Groc">Shop Groceries</option>
        </select>
        <div class="flex justify-center">
          <div class="timepicker relative form-floating mb-3 xl:w-96">
            <label for="floatingInput" class="text-gray-700">Select a date</label>
            <input type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date" />
          </div>
        </div>
        <div class="form-check">
          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
            Recurring activity
          </label>
        </div>
        <button onClick={() => addTask()} className="z-31 block add-button modal-footer justify-end p-4">
          Add
        </button>

      </div>
    </div>
  )
}


export default Modal