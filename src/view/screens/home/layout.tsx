import type { ReactNode } from 'react'

import '../../styles/globals.css'
import NavigationBar from './components/NavigationBar'

interface Props {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) =>
  <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
    <head />
    <body className='flex'>
      <NavigationBar />
      <main className='flex-1'>{children}</main>
    </body>
  </html>
