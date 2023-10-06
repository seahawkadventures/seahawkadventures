import Image from 'next/image'
import React from 'react'
import Avatar from '../public/rafting2.jpg';


const Aboutus = () => {
    return (
        <section className='w-full px-8 mt-10'>
            <div className='flex flex-row mx-3'>
                <div className='w-[90%] relative mx-6'>
                    <p className='relative uppercase mt-2 z-10 font-bold text-lg text-orange-300'>
                        Discover Story
                    </p>
                    <h3 className='text-5xl relative mb-10 z-[1]'>
                        Of the Waves of Ganga
                        <span className='absolute -z-[1] font-bold uppercase -left-2 -top-[40px] text-[110px] text-gray-100'>story</span>
                    </h3>

                    <p className='font-mono my-2'>
                        At Sea Hawk Adventures, we are passionate about adventure and the great outdoors. With years of experience and a deep love for nature, our team of expert guides is dedicated to providing you with the ultimate white-water rafting experience.
                    </p>
                    <p className=' font-mono my-2'>
                        Nestled in the heart of Uttarakhand, our Ganga river offers thrilling rapids, stunning scenery, and memories that will last a lifetime. Whether you're an adrenaline junkie seeking the rush of the rapids or a nature enthusiast looking to explore untouched wilderness, we invite you to join us on an unforgettable journey through the untamed waters of Ganges.
                    </p>
                </div>
                <div className='flex items-center'>
                    <div className='mx-auto w-[60%]'>
                        <Image
                            src={Avatar}
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus