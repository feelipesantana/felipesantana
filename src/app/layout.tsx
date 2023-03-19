import { Header } from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='' >
        <div className='grid grid-rows-layout max-h-full h-full'>
          <header><Header /></header>
          <main className='mx-auto max-w-[1280px]  w-full flex items-center'>{children}</main>
          <footer className=''> Teste</footer>
        </div>
      </body>
    </html>
  )
}
