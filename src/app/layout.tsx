import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import SideBar from '@/components/common/SideBar'
import Navbar from '@/components/common/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cotton apple',
  description: '영화 리뷰 사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SideBar />
        {children}
      </body>
    </html>
  )
}
