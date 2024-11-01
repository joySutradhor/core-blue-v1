
"use client"
import React from 'react'
import SectionHeader from '../utilites/SectionHeader'
import { PackagesData } from './PackagesData'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Btn from '../utilites/btn';
import { motion } from "framer-motion"
import { fadIn } from '../varient';



export default function Packages() {
  return (

    <section className="cb__section__gap" >
      {/* Section header */}
      <motion.div
        variants={fadIn("down", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

      >
        <div className='cb__section__bottom' id='pricing'>
          <SectionHeader
            shortTitle="Our Packages"
            sectionTitle="Flexible Pricing for Every Budget"
            secDes="We provide transparent, scalable pricing tailored to your project. No hidden fees, just straightforward pricing based on your needs."
          />
        </div>
      </motion.div>

      {/* Packages content */}
      <div className="cb__package__content">
        {PackagesData.map((plan, index) => (
          <div key={index} className="cb__package__card">
            <div className='cb__package__subcard'>
              <h2 className='cb__package__title'>{plan.name}</h2>
              <p className='cb__package__des'>{plan.description}</p>

              {/* price hidden from large devices and show only mobile devices */}
              <div className='cb__package__price__content__mobile'>
                <h4 className='cb__package__price'>{plan.price}</h4>
                <p className='cb__package__duration'>{plan.duaration}</p>
              </div>

            </div>

            {/* pacakges list */}
            <div className='cb__package__child'>
              <ul className='cb__package__features'>
                {plan.features.map((feature, i) => (
                  <div key={i} className='cb__package__icon'>
                    <span><IoCheckmarkDoneCircle /></span><li>{feature}</li>
                  </div>
                ))}
              </ul>
            </div>

            {/* price hidden from mobile and medium devices */}
            <div className='cb__package__child__wrapper'>
              <div className="cb__package__child__center">
                <div className='cb__package__price__content'>
                  <h4 className='cb__package__price'>{plan.price}</h4>
                  <p className='cb__package__duration'>{plan.duaration}</p>
                </div>
              </div>
            </div>
            <div className='cb__package__child__center'>
              <Btn btnText='SELECT PLAN'></Btn>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
