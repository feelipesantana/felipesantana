'use client'
import { Modal } from '@/components/Modal'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { useEffect } from 'react'
import useControlModal from '@/hook/useControlModal'

import './globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  const setModal = useControlModal((state) => state.setValueModal)

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 77) {
        setModal()
      }
    })
  }, [])

  return (

    <html lang="en">
      <head />
      <body>
        <div className='grid grid-rows-layout max-h-full h-full'>
          <header><Header /></header>
          <main className='mx-auto max-w-[1280px] w-full flex py-20 max-lg:px-10'>
            {children}
          </main>
          <footer className='mx-auto max-w-[1280px] w-full'> <Footer /></footer>
          <Modal />
        </div>
      </body>

    </html>

  )
}
