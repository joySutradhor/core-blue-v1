import React from 'react'
import { AchivementData } from './AchivementData'
import "./AchivementHelper.css"

export default function Achivement() {
    return (
        <section>
            <div className='cb__achivement__wrapper'>
                {
                    AchivementData?.map((data, index) => (
                        <div key={index} className='cb__achivement__inner'>
                            <div className='flex justify-between'>
                                <div>
                                    <h3 className='cb__achivement__number'>{data.number} +</h3>
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
