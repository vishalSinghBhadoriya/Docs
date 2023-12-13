import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
function Card({data,reference}) {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} className='relative w-60 h-72 rounded-[40px] bg-zinc-600 px-8 py-10 overflow-hidden '>
            <FaFileAlt/>
            <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full   left-0 '>
                <div className='flex items-center justify-between px-8 py-3  mb-3'>
                    <h5>{data.filesize}</h5>
                    {data.close?<MdOutlineCancel/>: <LuDownload/> }
                    
                </div>
                {
                  
                    data.tag.isOpen&&(
                    <div className="tag w-full py-4 bg-blue-600 flex items-center justify-center">
                  <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                  )}
                
                
            </div>
        </motion.div>
            
    </>
  )
}

export default Card;