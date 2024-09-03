"use client"
import React from 'react'
import { BackgroundGradient } from './ui/Background-gradient'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({item}) => {
    console.log(item)
  return (
    <div>
      <div>
        <BackgroundGradient className="rounded-[12px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image src="https://images.unsplash.com/photo-1708164593003-cdd3c3e2d6fe?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="Picture of the author"
      width={800}
      height={500} className='w-full'/>
      <div className='flex flex-col items-start gap-2'>
      <h2>{item.title}</h2>
      <h3>{item.author}</h3>
      <button className='text-pink-300 underline'><Link href={`courses/${item.id}`}>Learn More</Link></button>

      </div>
        </BackgroundGradient>
      </div>
    </div>
  )
}

export default Card
