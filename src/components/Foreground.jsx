import React, { useRef } from 'react'
import Card from './Card';

function Foreground() {
  const ref=useRef(null);
  const data =[
    {
      id:1,      
      desc:"This is description for the notes" ,
      filesize:".8mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"bg-green-600"},
    },
    {
      id:2, 
      desc:"This is description for the notes" ,
      filesize:".8mb",
      close:true,
      tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"},
    },
    {
      id:3, 
      desc:"This is description for the notes" ,
      filesize:".8mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
    },
    {
      id:4, 
      desc:"This is description for the notes" ,
      filesize:".8mb",
      close:true,
      tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"},
    },
    {
      id:5,      
      desc:"This is description for the notes" ,
      filesize:".8mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"bg-green-600"},
    },

  ];
  return (
    <>
    <div ref={ref} className=' fixed z-[3] top-0 left-0 w-full h-full flex gap-9 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
    </>
  );
}

export default Foreground;