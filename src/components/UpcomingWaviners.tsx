'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";


const UpcomingWaviners = () => {
    const musicIndustryData = [
        {
          title: "Music Production",
          description: "The process of creating, composing, and recording music tracks in a studio environment.",
          isFeatured: true,
          slug: "music-production"
        },
        {
          title: "Sound Engineering",
          description: "Specializing in the technical aspects of sound, including recording, mixing, and mastering.",
          isFeatured: false,
          slug: "sound-engineering"
        },
        {
          title: "Music Marketing",
          description: "Promoting music through various channels such as social media, radio, and streaming platforms.",
          isFeatured: true,
          slug: "music-marketing"
        },
        {
          title: "Music Streaming",
          description: "The distribution of music via platforms like Spotify, Apple Music, and YouTube Music.",
          isFeatured: false,
          slug: "music-streaming"
        },
        {
          title: "Music Licensing",
          description: "Managing the legal rights and permissions required to use music in different media formats.",
          isFeatured: true,
          slug: "music-licensing"
        },
        {
          title: "Live Concerts",
          description: "Organizing and performing live music events for audiences in various venues.",
          isFeatured: false,
          slug: "live-concerts"
        },
        {
          title: "Artist Management",
          description: "Overseeing the professional career and business affairs of musical artists.",
          isFeatured: true,
          slug: "artist-management"
        },
        {
          title: "Music Education",
          description: "Providing training and resources for individuals interested in learning music theory and practice.",
          isFeatured: false,
          slug: "music-education"
        },
        {
          title: "Music Distribution",
          description: "Delivering music to various platforms, retailers, and stores for consumer access.",
          isFeatured: true,
          slug: "music-distribution"
        }
      ];
      
  return (
    <div className='py-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto sm:px-6'>
            <div className=' text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide'>Featured Webiners</h2>
                <p className='mt-3 text-3xl text-white leading-8 font-extrabold tracking-tight sm:text-4xl'>
                    Enhance Your Musical Journey
                </p>
            </div>
            <div className='mt-10 '>
            <div className="max-w-5xl mx-auto px-8">
               <HoverEffect items={musicIndustryData.map(webiner=>(
                {
                    title: webiner.title,
                    description : webiner.description,
                    link : '/'
                }
  ))}/>
               </div>
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className='mt-4 border border-purple-400 round px-5 rounded-full py-4 text-white'>
                    View all webiners
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default UpcomingWaviners
