import React from 'react'
import { AchivementData } from './AchivementData'
import "./AchivementHelper.css"
import CountUp from 'react-countup'

export default function Achivement() {
    return (
        <section>
            <div className='cb__achivement__wrapper'>
                {
                    AchivementData?.map((data, index) => (
                        <div key={index} className='cb__achivement__inner'>
                            <div className='flex justify-between'>
                                <div>
                                    <h3 className='cb__achivement__number'>
                                        <CountUp delay={10} start={0} end={data.number} /> +
                                    </h3>
                                    <p>{data.name}</p>
                                </div>
                                <div>
                                    <button className='cb__achivement__icon'>{data.icon}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
