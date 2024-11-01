"use client"
import aboutImg from '@/public/assets/portfolio/2.png';
import Image from "next/image";
import Btn from '../utilites/btn';
import { motion } from "framer-motion"
import { fadIn } from '../varient';

export default function About() {
  return (

    <section className="cb__section__gap cb__about__container">
      <div className=''>
        <Image
          src={aboutImg}
          height={100}
          width={100}
          layout='responsive'
          alt='about image'
          className='rounded-lg grayscale-0 hover:grayscale transition-all ease-in-out duration-500 '
        >
        </Image>
      </div>

      {/* about us content */}

      <motion.div
        variants={fadIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

      >
        <div className='w-4/5'>
          <h4 className='cb__short__title'>Our Mission</h4>
          <h2 className='cb__heading'>Driven by Innovation and Expertise</h2>
          <p className='cb__about__paragraph'>We are a passionate React agency dedicated to crafting
            cutting-edge digital solutions. Our goal is to help </p>
          <div className='cb__about__buttons'>
            <Btn btnText='Discover'>
            </Btn>
            <Btn btnText='Learn More'>
            </Btn>
          </div>
          <p className='cb__about__footer__paragraph'>It is a long established fact that a reader will be distracted by the readable</p>
        </div>
      </motion.div>
    </section >

  )
}
