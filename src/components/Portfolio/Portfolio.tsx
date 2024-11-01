"use client"

import Image from 'next/image';
import SectionHeader from '../utilites/SectionHeader';
import { ProjectData } from './CardImages';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { motion } from "framer-motion"
import { fadIn } from '../varient';


export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault(); // Use the correct type for events

  // Ensuring AliceCarousel is only rendered on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = ProjectData?.map((data, index) => (
    <div key={index} className="cb__team__member group relative mt-16">
      <div className="cb__team__img__wrapper">
        <Image
          src={data.imgUrl}
          alt={data.title}
          height={300}
          width={300}
          className="cb__team__img"
          placeholder='blur'
          onDragStart={handleDragStart}
          role="presentation"
        />
      </div>
      <div>
        <h4 className='cb__team__name'>{data.title}</h4>
      </div>
      <div className='cb__team__socail absolute bottom-5 left-10 text-xl'>
        <div className="cb__team__icons__wrapper">
          <div className='cb__team__icons__clild'>
            {data.techStack.map((tech, index) => (
              <button key={index} className='cb__team__icons'>
                {tech.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (

    <motion.div

      variants={fadIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}

    >
      <section className="cb__section__gap">


        <SectionHeader
          shortTitle='Our Portfolio'
          sectionTitle='Showcasing Projects Across Industries'
          secDes='Explore our recent projects and see how we bring ideas to life. From startups to established enterprises, our work speaks for itself.'
        />



        <section className='slider-container'>
          <div className='cb__team__content'>
            {isClient && (
              <AliceCarousel
                mouseTracking
                items={projects}
                responsive={{
                  0: { items: 1 },
                  600: { items: 2 },
                  1024: { items: 3 },
                  1280: { items: 4 },
                }}
                controlsStrategy="alternate"
                autoPlay={true}
                autoPlayInterval={5000}
                infinite={true}
                disableButtonsControls={true}
                disableDotsControls={false}
              />
            )}
          </div>
        </section>
      </section>
    </motion.div>
  );
}
