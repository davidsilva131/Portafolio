import NavBar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David Silva',
  description: 'Juan David Silva, front end developer portfolio.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
