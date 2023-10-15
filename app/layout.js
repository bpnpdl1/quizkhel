import Header from '@/Components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuizKhel',
  description: 'QuizKhel is a quiz app built with Next.js and Laravel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
       <div className='min-h-screen flex flex-col justify-between '>

       <Header />
        
        {children}
        
        <Footer />

        </div>
        </body>
    </html>
  )
}
