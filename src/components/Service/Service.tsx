
"use client"
import React from 'react';
import SectionHeader from '../utilites/SectionHeader';
import { services } from './serviceData';
import { motion } from "framer-motion"
import { fadIn } from '../varient';

const Service = () => {
  return (

    <section className='cb__section__gap' id='service'>
      {/* Section header */}
      <motion.div
        variants={fadIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div className='cb__section__bottom'>
          <SectionHeader
            shortTitle="What We Do"
            sectionTitle="Comprehensive React Development Services"
            secDes="From front-end development to custom web apps, we offer a full range of services. Our React expertise ensures your project stands out."
          />
        </div>
      </motion.div>

      {/* Services content */}
      <div className="cb__service__content">
        {services?.map((service, index) => (
          <div
            key={index} className='cb__service__inner' >
            <div className="cb__service__icon">{service.icon}</div> {/* Render the icon */}
            <h3 className='cb__service__title'>{service.title}</h3>
            <p className='cb__service__des'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

