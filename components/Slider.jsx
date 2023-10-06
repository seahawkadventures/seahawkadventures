import Image from 'next/image'
import React from 'react'
import Main from '../public/slide01.jpg';

const Slider = () => {


    
    return (
        <section className='relative clear-both overflow-hidden'>
            <div className='relative m-0'>
                <div className='flex flex-col md:flex-row'>
                    <div className='block relative w-full'>
                        <Image
                            src={Main}
                            className='h-screen brightness-[.6] object-cover'
                        />
                        
                        <div className="mt-20 absolute flex flex-col top-0 bottom-0 left-0 w-full p-4 text-white items-center justify-center text-center">
                            <div className='max-w-4xl mt-[15rem] md:mt-20'>
                                <h2 className='-mt-3 md:text-lg font-semibold uppercase bg-gradient-to-r from-orange-400 to-lime-400 text-2xl bg-clip-text text-transparent'>
                                    <span>We are hiking and outdoor club</span>
                                </h2>
                            </div>
                            <div className='w-full mt-10 max-w-3xl'>
                                <h1 className='text-5xl'>
                                    It's Time to Start Your Amazing Adventures
                                </h1>
                            </div>
                            <div className='w-full mt-10 max-w-3xl'>
                                <p className='text-lg'>
                                    Welcome to the thrilling world of Sea Hawk Adventures! Embark on an unforgettable adventure as you navigate through the heart-pounding rapids of Ganges
                                </p>
                            </div>
                            <button className='mt-10 px-8 py-3 rounded-lg bg-orange-400 text-xl'>
                                Book trip
                            </button>
                        </div>

                        <div className='container absolute right-0 left-0 mx-auto z-[11]'>
                            <div className='flex flex-wrap -mx-6'>
                                <div className='static min-h-0 my-0 col-md-12'>
                                    <div className='flex absolute h-full left-4 right-4 justify-center p-0'>
                                        <div className='flex items-center flex-col justify-center w-full'>
                                            <div>
                                                <span>We are hiking and outdoor club</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider