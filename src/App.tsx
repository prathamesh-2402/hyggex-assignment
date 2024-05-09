import NavBar from './components/NavBar'
import BreadCrumb from './components/BreadCrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabCards from './components/TabCards'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { carouselData } from './lib/data'
import Faq from './components/FAQ'
import { Maximize, RotateCw } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container my-6 flex flex-col gap-14 overflow-x-hidden'>
      <NavBar />

      <BreadCrumb />

      <h1 className='text-4xl font-bold bg-gradient-to-t from-[#164EC0] to-[#06286E] bg-clip-text text-transparent'>Relations and Functions ( Mathematics )</h1>
      <div className='flex justify-center items-center w-full'>
        <Tabs defaultValue="study" className='flex flex-col items-center w-full'>
          <TabsList className='flex gap-4 sm:mb-6 flex-wrap h-auto'>
            <TabsTrigger value="study">Study</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
            <TabsTrigger value="test">Test</TabsTrigger>
            <TabsTrigger value="game">Game</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          <TabsContent value="study" className='w-full sm:w-5/6 lg:h-3/5 xl:w-1/2 h-full'>
            <Carousel setCount={setCount} >
              <CarouselContent>
                {
                  carouselData.map((data, index) => {
                    return (
                      <CarouselItem key={index} className='h-[400px]' >
                        <TabCards flipUpper={data.flipUpper} flipLower={data.flipLower} />
                      </CarouselItem>
                    )
                  })
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <RotateCw className='absolute left-0 -bottom-[4.5rem] text-[#06286E]' size={28} />
              <p className='absolute left-[47%] -bottom-[4.5rem] font-semibold text-2xl hidden sm:inline-block'>{count + 1}/10</p>
              <Maximize className='absolute right-0 -bottom-[4.5rem] text-[#06286E]' size={28} />
            </Carousel>
          </TabsContent>
          <TabsContent value="quiz" className='w-full sm:w-5/6 lg:h-3/5 xl:w-1/2 h-full'>
            <div className='h-[18rem]'>
              <TabCards flipUpper="Nothing but a Quiz" flipLower="No Quiz?" />
            </div>
          </TabsContent>
          <TabsContent value="test" className='w-full sm:w-5/6 lg:h-3/5 xl:w-1/2 h-full'>
            <div className='h-[18rem]'>
              <TabCards flipUpper="There's no test" flipLower="Believe Me" />
            </div>
          </TabsContent>
          <TabsContent value="game" className='w-full sm:w-5/6 lg:h-3/5 xl:w-1/2 h-full'>
            <div className='h-[18rem]'>
              <TabCards flipUpper="No game too :(" flipLower="I know it sucks" />
            </div>
          </TabsContent>
          <TabsContent value="others" className='w-full sm:w-5/6 lg:h-3/5 xl:w-1/2 h-full'>
            <div className='h-[18rem]'>
              <TabCards flipUpper="What did you expect" flipLower="You're still here?" />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className='flex justify-between items-center md:pb-28 pb-0 pt-28 flex-col-reverse md:flex-row gap-10'>
        <img src='/publish.svg' />
        <div className='flex items-center gap-2'>
          <img src='/plus.svg' className='w-14' />
          <h1 className='text-3xl font-medium bg-gradient-to-t from-[#164EC0] to-[#06286E] bg-clip-text text-transparent'>Create Flashcard</h1>
        </div>
      </div>

      <Faq />
      <h1 className='text-lg font-medium text-center underline underline-offset-2'>Created by <a href='https://github.com/prathamesh-2402/' target="_blank" className='bg-gradient-to-t from-[#164EC0] to-[#06286E] bg-clip-text text-transparent'>Me</a></h1>
    </div>
  )
}

export default App
