import { Linkedin, Github, Instagram } from 'lucide-react'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between items-center mx-5 sm:mx-8 xl:mx-16 my-5'>
      <div>
        <Link className='mr-auto' href='/#'>
          <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-primary'>
            charlses
          </h2>
        </Link>
      </div>
      <nav>
        <menu className='flex gap-2 '>
          <li>
            <Link href='https://github.com/charlses' target='_blank'>
              <Button variant='outline' size='icon'>
                <Github className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <Link href='https://linkedin.com/in/davit-tavadze' target='_blank'>
              <Button variant='outline' size='icon'>
                <Linkedin className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <Link href='https://instagram.com/barafrends' target='_blank'>
              <Button variant='outline' size='icon'>
                <Instagram className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Header
