import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full h-[673px] px-[30px] py-[7px] bg-[#212121]'>
        <div className='flex items-center justify-between '>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>all</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Sitcom</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Soap Opera</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>News</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Action Film</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Rock music</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Mix</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Podcast</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Astronomy</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Interview</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>Comedy</button>
            <button className=' h-[26px] w-auto rounded-[16px] text-white bg-[#343434] flex items-center justify-center p-4 text-[12px]'>UX/UI</button>
        </div>

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


                <div className='w-[350px] h-[300px]'>
                    <div className='w-full h-[210px]'>
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6Rm85a-Qx4o?si=uzuuMHRDlS3_mens" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                  

                    <div className=' flex items-center gap-3 mt-[10px]'>
                        <div>
                            <h4 className=' text-white '>Super Xotiraga 6 qadam</h4>
                            <p  className=' text-white text-[10px]'>340K views · 6 months ago</p>
                        </div>
                    </div>

                </div>


        </div>


    </div>
  )
}

export default HomePage