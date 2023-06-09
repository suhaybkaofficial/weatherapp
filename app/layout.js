import AppContext, { AppContextProvider } from '@/contexts/AppContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather App 1.0',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
