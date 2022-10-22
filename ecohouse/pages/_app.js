import '../styles/globals.css'
import {TaskProvider} from "../context/task-context"
{/* <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" /> */}

function MyApp({ Component, pageProps }) {
  return (
  //   <>
    <TaskProvider>
      <Component {...pageProps} />
      </TaskProvider>
    //   <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
    // </>
  )
}

export default MyApp;
