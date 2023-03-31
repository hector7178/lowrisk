import { useState, useEffect } from 'react'

const Carousel = ({ carousel, time }) => {
    const [index, setIndex] = useState(0);
    const keys = carousel.map((child, index) => index);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const newIndex = (index + 1) % keys.length;
        setIndex(newIndex);
      }, time);
      return () => clearInterval(interval);
    });

   
  
   
   
    return (
      <div className="relative w-3/4 " style={{height:"12vh"}}>
        <div className="flex flex-col gap-2 ">
         <h6 className='grid-span-2 text-base text-center  text-white transition duration-300 ease-in-out'>{carousel[index].head}</h6>
          <h6 className='grid-span-1 text-xs text-center text-blue-400 transition duration-300 ease-in-out'>{carousel[index].body} </h6> 
          
        </div>
        <div className='absolute flex -bottom-full left-[37.5%] w-1/4 justify-between'>
         { carousel.map((child, i) =>{
          
        
            return(
              <button key={i} className={index===i?'transition duration-700 ease-in-out w-2 h-2 scale-150 rounded-lg bg-white' :'transition duration-700 ease-in-out w-2 h-2 rounded-lg bg-white'} onClick={()=> setIndex(i)} ></button>
            )
          })}
          </div>
      </div>
    );
  }
  
  export default Carousel;