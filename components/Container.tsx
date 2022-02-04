import { useTheme } from 'next-themes'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface IContainerProps {
  title?: string
  children: JSX.Element[] | JSX.Element
}

export default function Container(props: IContainerProps) {
  const { children } = props

  return (
    <div className="container mx-auto max-w-[800px] p-8">
      <Navbar />
      <main id="skip" className="flex flex-col justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
