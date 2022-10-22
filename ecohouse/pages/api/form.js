import {TaskFormSpecific} from './form_specific';
const HandleClick = () => (
    <TaskFormSpecific /> // 1. render here..? but wouldn't it be in the same position as TaskForm now?
)
const TaskForm = () => (
    // <>
    <div class="max-w-2xl mx-auto">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose the type of task</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select option</option>
            <option onclick={HandleClick} value="Laundry">Laundry</option>
            <option onclick={HandleClick} value="Wash Dish">Wash Dishes</option>
            <option onclick={HandleClick} value="Wash Veg">Wash Fruits and Vegetables</option>
            <option onclick={HandleClick} value="Shower">Take Shower</option>
            <option onclick={HandleClick} value="Water Plant">Water Plants</option>
            <option onclick={HandleClick} value="Make Drink">Make Tea/Coffee</option>
            <option onclick={HandleClick} value="Use Oven">Use Oven</option>
            <option onclick={HandleClick} value="Vacuum">Vacuum</option>
            <option onclick={HandleClick} value="Cook">Cook</option>
            <option onclick={HandleClick} value="Boil Kettle">Boil Kettle</option>
            <option onclick={HandleClick} value="Shop Groc">Shop Groceries</option>
        </select>
    </div>
    //     <TaskFormSpecific /> // 2. or create here with nothing on the option first then the subtasks will appear onclick option?
    // </> 
// now should we create state (also should we use recoil.js for state management?)
// so that when we click one of the options
// so onclick, subtypes will appear on form below/fill up form below with more specific tasks to choose from?
);

export default TaskForm;
