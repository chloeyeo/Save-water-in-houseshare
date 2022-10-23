import Head from 'next/head'
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css'
import Layout from '../components/root/Layout';
import { useTask } from '../context/task-context';
import { HomeIcon } from '@heroicons/react/24/solid'


// TODOS

// Fix date picker
// Suggestions


// Custom icons

// Use timeline view 

export default function Home() {
  const router = useRouter();
  const { toggleModal, tasks } = useTask()

  const NextPage = () => {
    setTimeout(() => {
      router.push("/calendar")
    }, 1000)
  }
  return (
    <div className={styles.container}>
      <Layout>
        <div class="flex items-center justify-center w-full">
          <HomeIcon className='text-blue-600 w-16' />
        </div>
        <h1 class="font-large text-blue-600 text-4xl font-bold">
          Welcome to Eco House.
        </h1>
        <h2 class="font-regular text-4xl mt-0 mb-2 text-black-600">Simple schedules to optimise your energy</h2>

        <p>Get started by adding your daily tasks and submit to receive timetable suggestions for your household.</p>
        <div className='grid gap-4'>
          {tasks.map(({ taskName, Icon, attendees, recurrence, time }, i) => {
            return (
              <div key={`${i}-${taskName}`} className='flex space-x-2 bg-blue-600 text-white rounded p-2 justify-center'>
                <Icon className="w-8 h-8" />
                <div>
                  <p className='text-xl font-bold'>{taskName}</p>
                  <p className='text-sm'>Attendees:  Sam, Tessa, Fred</p>

                </div>
              </div>
            )
          })}
        </div>
        <div class="flex">
          <button className="add-button mr-2" onClick={toggleModal}>Add Task</button>
          {tasks.length > 0 ? (
            <button className='submit-button' onClick={NextPage}>Submit Daily Tasks</button>
          ) : null
          }
        </div>

      </Layout >
    </div >
  )
}
