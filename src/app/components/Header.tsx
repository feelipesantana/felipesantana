'use client'
import Image from 'next/image'
import {FiCommand} from 'react-icons/fi'
import { motion } from "framer-motion";
export function Header() {
  const menuTitle = [
    'About',
    'Projects',
    'Techs',
    'Setup',
    'News',
    'Ideas',
  ]

  return (
    <nav>
      <div  className='mx-auto flex items-center justify-between w-full max-w-[1280px] min-h-[5rem] '>
        <div>
          <Image src="./assets/images/logo-fs-white.svg" width={30} height={30} alt={'Felipe Santana'} />
        </div>
        <div className='max-w-[32rem] w-full  mx-auto'>

          <ul className='flex justify-between'>
            {menuTitle.map(res => {
              return (
                <li key={res} className='cursor-pointer text-slate-500  text-xs font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900'>{res.toUpperCase()}</li>
              )
            })}
          </ul>

        </div>
        <div> 
          <motion.button whileHover={{ scale: 1.2 }}> 
            <FiCommand className='w-6 h-6'/>
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
