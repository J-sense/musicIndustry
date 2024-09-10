'use client'
import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const TestmonialCards = () => {
    const testimonials = [
        {
          name: "Emily Johnson",
          title: "Music Producer, Sonic Wave Studios",
          quote: "Working with this team has been an absolute game-changer for our production process. Their expertise in sound design and mixing took our tracks to a whole new level. Their commitment to excellence and attention to detail make them stand out in the industry. Highly recommended!"
        },
        {
          name: "Michael Thompson",
          title: "CEO, Harmony Records",
          quote: "The level of professionalism and creativity displayed by this company is unmatched. They consistently deliver high-quality work that exceeds our expectations, helping our artists shine in a competitive market. Their innovative ideas and understanding of the music landscape have been crucial to our success."
        },
        {
          name: "Samantha Lee",
          title: "Singer-Songwriter",
          quote: "I am beyond impressed with the results! The team really understood my vision and helped bring my music to life in a way I never imagined. Their support and collaboration throughout the process made it a truly enjoyable experience. Their attention to detail and passion for music is evident in every note."
        },
        {
          name: "David Martinez",
          title: "DJ and Electronic Music Artist",
          quote: "From the initial concept to the final mix, the process was seamless and collaborative. The team's innovative approach to sound and their dedication to the craft truly set them apart in the industry. They were able to capture the energy I wanted and elevate it to new heights. Working with them has been a pleasure."
        },
        {
          name: "Rachel Kim",
          title: "A&R Manager, Starline Entertainment",
          quote: "Their ability to adapt and deliver under tight deadlines is impressive. The quality of work, combined with their creative insight, has made them an invaluable partner for our label. Their understanding of what it takes to succeed in this industry is evident in every project they touch."
        },
        {
          name: "James Carter",
          title: "Guitarist and Music Educator",
          quote: "The professionalism and expertise they brought to our project were evident from day one. They helped us refine our sound and provided invaluable feedback that took our music to the next level. Their deep knowledge of music theory and production was a huge asset in achieving our goals."
        },
        {
          name: "Olivia Brown",
          title: "Vocal Coach and Recording Artist",
          quote: "Collaborating with this team has been an incredible experience. They truly understand the intricacies of vocal production and brought out the best in my recordings. Their patience and willingness to experiment with new ideas made the process both productive and fun. I couldn't be happier with the outcome."
        },
        {
          name: "Liam Wilson",
          title: "Indie Artist and Composer",
          quote: "This team is exceptional in every way. They took the time to understand my vision and offered valuable insights that enhanced the final product. Their technical skills are top-notch, and their creative input helped my music reach its full potential. I’m grateful for their dedication and passion."
        }
      ];
      
  return (
    <> 
    <div className='h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden '>
    <h2 className=' text-xl md:text-5xl text-white font-semibold tracking-tight '>Here our Hermony :voice of success </h2>
    <div className="h-[20rem] rounded-md flex flex-col antialiaseditems-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  </div>
    </>
  )
}

export default TestmonialCards
