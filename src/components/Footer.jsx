import React from 'react'
import { styles } from '../style'
import { logo, logo3 } from '../assets'
import { SectionWrapper } from '../hoc'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col justify-start mr-10'>
                <img
                src={logo3}
                alt='logo'
                className='w-[206px] h-[202px] object-contain'/>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                Ready to make User-friendly and appealing webistes
                    </p>
            </div>
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45'>
      <p className='font-poppins text-white font-normal text-center text-[18px] leading-[27px]'>
        2024 cephusluke@gmail.com. All Rights Reserved
      </p>
    </div>
    <div className='flex flex-row md:mt-0 mt-6'>{socialMedia.map((social, index)=>(
      <img
      key={social.id}
      src={social.icon}
      alt={social.id}
      className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ?'mr-6': 'mr-0' }`}
      />
    ))}</div>
    </section>
  )
}

export default SectionWrapper(Footer, '')