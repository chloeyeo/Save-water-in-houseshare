
import react from 'React';

const TaskForm = () => (
        <div class="max-w-2xl mx-auto">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>

            <p class="mt-5">This select component is part of a larger, open-source library of Tailwind CSS components.
                Learn
                more
                by going to the official <a class="text-blue-600 hover:underline"
                    href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
            </p>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>

);

export default TaskForm;
