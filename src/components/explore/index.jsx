import React from 'react'

const Explore = () => {
    
  return (
    <div className='w-full h-[673px] px-[30px] py-[7px] bg-[#212121]'>
         <div className='grid grid-cols-[repeat(4,1fr)] mt-[30px] gap-4'>
                <div className='w-[350px] h-[300px]'>
                    <div className='w-full h-[210px]'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lXZzRJHd5ME?si=I3BRxUEcrKkdYhfb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  
                  
                    <div className=' flex items-center gap-3 mt-[10px]'>
                       
                        <div>
                            <h4 className=' text-white '>Yaponiyaga Sayohat</h4>
                            <p  className=' text-white text-[10px]'>720K views · 7 months ago</p>
                        </div>
                    </div>

                </div>


              


        </div>
    </div>
  )
}

export default Explore