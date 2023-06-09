/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'


export default function About(){
  return(
      <div className='w-full '>
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 ">About me</h1>
          <div className='mt-20 w-full mx-auto gap-10 lg:flex'>

            <div className='w-full h-full'>
              <Image src="https://github.com/felipesantanajs.png" alt='My image' width="300"  height="300" className='rounded-lg'/>
            </div>
              
              <div className='text-gray-400  text-lg flex flex-col gap-4 mt-10 lg:mt-0'>
                <p>Hello, My name is <span className='text-white'>Felipe Santana</span> from São Paulo, Brazil. <br /> </p>
                <p>
                  I'm a <span className="text-white">Full-stack engineer</span> that loves Frontend. 
                </p>
                <p>
                  My principal skills:<span className="text-white text-sm italic"> Javascript, ReactJS, Next.js, Node.JS, TypeScript, MySQL, PostgreSQL, GraphQL, PHP </span><br />
                  Favorite libs:<span className="text-white text-sm italic"> Tailwind, Zustand, React Query, tRPC, Frame Motion.</span>
                </p>
                <p>
                  I'm passionate about innovation and always <span className="text-white"> seeking to learn new technologies to provide creative </span> and efficient solutions for projects. 
                  I try every day to <span className="text-white">reinvent myself</span> to be able to add the best in the company where I work and the people around me. 
                  I'm always looking for day after day to get out of my comfort zone in order to evolve,<span className="text-white"> grow professionally and mentally. </span>
                </p>
              </div>
          </div>
      </div>
  )
}