import { cn } from '@/utils/cn'
import { Open_Sans } from 'next/font/google'

import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'HeadlessAuth.js - Authentification without the headache',
  description: 'Generated by create next app',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          openSans.className,
          'selection:bg-indigo-600/40 selection:text-white'
        )}
      >
        {children}
      </body>
    </html>
  )
}
