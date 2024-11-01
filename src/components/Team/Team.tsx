"use client";

import { useState, useEffect } from 'react';
import SectionHeaderLeft from '../utilites/SectionHeaderLeft';
import Image from 'next/image';
import { TeamData } from './TeamData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { LuShare2 } from "react-icons/lu";
import Achivement from './Achivement';
import { motion } from "framer-motion"
import { fadIn } from '../varient';

// import "./teamSlider.css"

export default function Team() {
  const [isClient, setIsClient] = useState(false);
  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  // Ensuring AliceCarousel is only rendered on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prepare the items for AliceCarousel
  const items = TeamData?.map((data, index) => (
    <div key={index} className="cb__team__member group relative">
      <div className="cb__team__img__wrapper">
        <Image
          src={data.imgUrl}
          alt={data.name}
          height={300}
          width={300}
          className="cb__team__img"
          placeholder='blur'
          onDragStart={handleDragStart}
          role="presentation"
        />
      </div>

      <div>
        <h4 className='cb__team__name'>{data.name}</h4>
      </div>

      {/* Social links */}
      <div className='cb__team__socail absolute bottom-5 left-10 text-xl'>
        <button className="cb__team__share">
          <LuShare2 />
        </button>
        <div className=" cb__team__icons__wrapper ">
          <div className='cb__team__icons__clild'>
            {data.links.map((link, index) => (
              <button key={index} className='cb__team__icons'>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));


  return (
    <section className="cb__section__gap">
      {/* Section header */}
      <motion.div
        variants={fadIn("right", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className='cb__section__bottom'>
          <SectionHeaderLeft
            shortTitle="Meet the Team"
            sectionTitle="Get to know us"
            secDes="Our talented team combines creativity with technical expertise. Together, we build innovative solutions that help businesses grow."
          />
        </div>
      </motion.div>

      {/* Meet our team member */}
      <section className='slider-container'>
        <div className='cb__team__content'>
          {isClient && (
            <AliceCarousel
              mouseTracking
              items={items}
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

      {/* achivement section here */}
      <section>
        <Achivement></Achivement>
      </section>
    </section>
  );
}
