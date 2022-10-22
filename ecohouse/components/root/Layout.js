import Image from 'next/image'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Layout = ({children}) => (
    <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='max-w-2xl mx-auto p-4 space-y-4'>
            {children}
            </main>
            <footer className='max-w-2xl mx-auto p-4 space-y-4'>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Powerpuff Girls
          </a>
        </footer>
    </div>
)

export default Layout