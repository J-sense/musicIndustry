import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/spotlight'

const Herosection = () => {
  return (
    <div className='text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="pink"
      />
     <div className='p-4 relative z-10 w-full text-center '>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from bg-neutral-50 to-neutral-400'>Master the art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehense music courses and transform your musical journey toaday, whether you're a biginner or looking to refine your skills,join us to unlock your true potential.</p>
       
     </div>
     <div className="mt-4 border border-purple-400 round px-5 rounded-full py-4">
          <Link href={"/courses"}>
          explore courses</Link>
        </div>
    </div>
  )
}

export default Herosection
