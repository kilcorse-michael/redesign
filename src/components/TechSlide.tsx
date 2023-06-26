import JsPic from '../assets/JavaScript-logo.png'
import ReactPic from '../assets/react.jpg'
import TailwindPic from '../assets/tailwind.jpg'
import NodePic from '../assets/nodejs.png'
import StablePic from '../assets/stable.png'
import { useParallax } from 'react-scroll-parallax';

export default function TechSlide(){
    const parallax = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
    translateX: [0, 300],
      });
    return(
        <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className=" flex items-center justify-center text-center w-full h-full bg-[#ff0178]" >
                <div className='w-3/4'>
                <p className="m-10 content-center font-semibold text-lg lg:text-7xl text-white">
                    Specializing in the ever evolving <span className='text-[#01008e]'>Javascript</span> ecosystem to deliver a clean and <span className='text-[#01008e]'>modern</span> web presence.
                </p>
                <div className='flex justify-center items-center flex-col md:flex-row w-1/5 gap-5' ref={parallax.ref}>
                    <img className='reset hover:rise' src={JsPic} />
                    <img className='reset hover:rise' src={ReactPic} />
                    <img className='reset hover:rise' src={TailwindPic} />
                    <img className='reset hover:rise' src={NodePic} />
                    <img className='reset hover:rise' src={StablePic} />
                    </div>
                </div>
            </div>
        </div>
    )
}