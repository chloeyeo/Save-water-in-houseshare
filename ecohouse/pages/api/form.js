const TaskForm = () => (
        <div class="max-w-2xl mx-auto">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose the type of task</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select option</option>
                <option value="Laundry">Laundry</option>
                <option value="Wash Dish">Wash Dishes</option>
                <option value="Wash Dish">Wash Fruits and Vegetables</option>
                <option value="Wash Dish">Take Shower</option>
                <option value="Wash Dish">Water Plants</option>
                <option value="Make Tea">Make Tea/Coffee</option>
                <option value="Make Tea">Use Oven</option>
                <option value="Make Tea">Vacuum</option>
                <option value="Make Tea">Cook</option>
                <option value="Boil Kettle">Boil Kettle</option>
                <option value="Make Tea">Shop Groceries</option>
            </select>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>

);

export default TaskForm;
