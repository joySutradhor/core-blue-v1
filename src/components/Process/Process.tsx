
"use client"

import React from 'react'
import SectionHeader from '../utilites/SectionHeader'
import ProgressContent from './ProgressContent'
import Image from 'next/image'
import FlowChart from '@/public/assets/workflow/flow.png'
import WorkflowDark from '@/public/assets/workflow/Workflow.png'
import { motion } from "framer-motion"
import { fadIn } from '../varient';

export default function Process() {
  return (

    <section className="cb__section__gap">
      <div className='cb__section__bottom'>
        <SectionHeader
          shortTitle="Our Process"
          sectionTitle="Streamlined Workflow for Success"
          secDes="We follow a structured workflow to ensure project success. From planning to launch, each step is designed to deliver the best outcomes."
        />
        <div className="cb__progress">
          <motion.div
            variants={fadIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <ProgressContent
              title='Efficient Workflow for Every Project'
              des='We streamline each phase to deliver high-quality results on time. Our workflow ensures clarity and collaboration'
              btnText='see work now'
            />
          </motion.div>


          <motion.div

            variants={fadIn("down", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className='mt-4 md:mt-auto dark:hidden'>
              <Image
                src={FlowChart}
                alt='flowchart'
                layout='responsive'
              />
            </div>

            <div className='mt-4 md:mt-auto hidden dark:block'>
              <Image
                src={WorkflowDark}
                alt='WorkflowDark'
                layout='responsive'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
