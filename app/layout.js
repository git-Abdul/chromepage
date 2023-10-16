import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='select-none'>
      <head>
        <link rel="icon" src="https://git-abdul.github.io/dev/logo.png" type='png' sizes="any" />  
      </head> 
      <body className={inter.className}>{children}</body>
    </html>
  )
}
