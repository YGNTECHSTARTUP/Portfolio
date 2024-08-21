import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    const CardData:{
        title:string,
        imageUrl:string,
        description:string,
        link:string
    }[] = [
      {
        title:'Profinaty Guardian',
        imageUrl:'profinati.png',
        description:'Lightning-Fast API for Real-Time',
        link:'https://profinati-ui.vercel.app/'
      },
      {
        title:'Imaginify',
        imageUrl:'imaginify.png',
        description:'An Image Generation Tool that leverages the power of AI to generate images based on the user’s input. The user can input a text description, and the AI will generate an image based on the input. The user can also download the generated image.',
        link:'https://ygn-imaginify.vercel.app/'
      },
      {
        title:'Pricify',
        imageUrl:'/pricify.png',
        description:' Pricify is a platform that uses web scraping to scrape Amazon products using their URLs. This website displays the scraped data to the user and provides a link through which the user can buy the product. All the latest scraped products will be added to the Our Products section.',
        link:'https://pricify-peach.vercel.app/'
    },
{
    title:'PokeGuess',
    imageUrl:'/pokeguess.png',
    link:'https://pokeguess-silk.vercel.app/',
    description:'PokeGuess is a game that uses the PokeAPI to fetch a random Pokemon and display it to the user. The user has to guess the Pokemon by typing its name in the input field. If the user guesses correctly, the game will display a success message; otherwise, it will display an error message.'
},
{
    title:'Collage WebSite',
    imageUrl:'/AANM-VVRSR.png',
    link:'https://aanm-vvrsr.vercel.app/',
    description:'This is a collage Website That I made for my collage, This website is made using Next.js and Tailwind CSS. This website is a static website and is hosted on Vercel. This website is made for the purpose of the collage project.'
}]
  return (
    <div className='container  mx-auto'>
       {
         CardData.map((card)=>(
            <Card key={card.title} className=' mx-auto first:mt-10 text-center mb-16 bg-slate-100 dark:bg-slate-800'>
            <CardHeader>
<CardTitle className='text-4xl  dark:text-violet-600 underline text-teal-500'>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={card.link}>
              <Image className='mx-auto w-fit hover:scale-105 hover:backdrop-blur-md hover:opacit5y-100 opacity-95 transition-all ease-in-out delay-300' src={card.imageUrl}  alt={card.title}  width={1040} height={1040} />
              </Link> 
              <CardDescription className='text-md mt-4 md:text-lg lg:text-xl'>
             {card.description}
              </CardDescription>
            </CardContent>
        </Card>
         ))
       }
    </div>
  )
}

export default page