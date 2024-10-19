import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";


const Images = () => {
  return (
    <div className='flex ml-14 mt-16 '>
        <div className="box1 flex flex-col w-60">
        <img src={img1} alt="img" className='ml-8 h-60'/>
        <img src={img6} alt="img" className='ml-8 h80 mt-4'/>
        </div>

        <div className="box2 w-60" >
        <img src={img2} alt="img" className='ml-12 h-40 w-42'/>
        <img src={img7} alt="img" className='ml-12 mt-4 w-60' />
        </div>

        <div className="box3 w-60 mx-2">
        <img src={img3} alt="img" className='ml-16 mx-2 '/>
        <img src={img8} alt="img" className='ml-16 mt-4 '/>
        </div>

        <div className="box4 w-60 mx-4" >
        <img src={img4} alt="img" className='ml-16 w-60'/>
        <img src={img10} alt="img" className='ml-16 mt-4 w-60'/>
        <img src={img2} alt="img" className='ml-16 mt-4 w-60'/>
        </div>

        <div className="box5 w-60 mx-4 ">
        <img src={img5} alt="img"className='ml-16 ' />
        <img src={img9} alt="img" className='ml-16 mt-4'/>
        </div>
      
      
    </div>
  )
}

export default Images
