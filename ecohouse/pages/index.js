import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Layout from '../components/root/Layout';
import { useTask } from '../context/task-context';

export default function Home() {
  const {toggleModal} = useTask()
  return (
      <div className={styles.container}>
        <Layout>
          <h1 className="">
            Welcome to Eco House!
          </h1>

          <button className="add-button" onClick={toggleModal}>Add Task</button>

          </Layout>

      </div>
  )
}
