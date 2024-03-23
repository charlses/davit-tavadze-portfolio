import { Badge } from '@/components/ui/badge'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb
} from 'react-icons/si'

const About = () => {
  return (
    <section className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            About me
          </div>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              My skills
            </h2>
            <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              amet, assumenda quis sit eaque pariatur odit, eligendi atque
              mollitia ut minus deleniti reprehenderit id voluptate, aspernatur
              explicabo blanditiis culpa dignissimos.
            </p>
          </div>
          <div className='flex gap-5 flex-wrap '>
            <Badge className='flex items-center'>
              <SiJavascript className='h-6 w-6 mr-2 text-yellow-400' />
              JavaScript
            </Badge>
            <Badge className='text-white font-light'>
              <SiTypescript className='h-6 w-6 mr-2 text-blue-700' />
              TypeScript
            </Badge>
            <Badge className='text-white font-light'>
              <SiReact className='h-6 w-6 mr-2 text-blue-700' />
              React
            </Badge>
            <Badge className='text-white font-light'>
              <SiNextdotjs className='h-6 w-6 mr-2 text-black' />
              Next.js
            </Badge>
            <Badge className='text-white font-light'>
              <SiNodedotjs className='h-6 w-6 mr-2 text-green-500' /> NodeJs
            </Badge>
            <Badge className='text-white font-light'>
              <SiExpress className='h-6 w-6 mr-2 text-black' /> Express
            </Badge>
            <Badge className='text-white font-light'>
              <SiMongodb className='h-6 w-6 mr-2 text-green-500' /> MongoDB
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
