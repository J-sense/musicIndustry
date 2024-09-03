import Link from 'next/link'
import React from 'react'
import courseData from "@/data/feature_music.json"
import Card from './Card'

interface Courses{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeature: boolean,
    image: string
  }
const Feature = () => {
     const fetauredCourse = courseData.filter((course:Courses) => course.isFeatured)
     console.log(fetauredCourse)
   
  return (
    <div className='text-white'>
      <div className='text-center'>
        <div className='text-base text-teal-600 font-semibold tracking-wide' >
            <h2>FEATURED COURSES</h2>
            <p className='mt-3 text-3xl text-white leading-8 font-extrabold tracking-tight sm:text-4xl'>Learn With the best</p>
        </div>
        <div className='mt-10'>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:w-[90%] mx-auto'>
        {
          fetauredCourse.map((item:Courses,idx)=><Card item={item} key={idx}></Card>)
        }
        </div>
            
       
        </div>
        <div className="mt-20 text-center">
          <Link href={"/courses"} className='border border-purple-400 round px-5 rounded-full py-4'>
          explore courses</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Feature
