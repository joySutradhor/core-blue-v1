"use client"
import React from 'react'
import { BsCalendar2Date } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";
import { motion } from "framer-motion"
import { fadIn } from '../varient';



const stayInfo = [
    {
        dateIcon: <BsCalendar2Date />,
        date: "Oct, 16, 2026",
        userIcon: <LuUserCircle />,
        userName: "John Smith",
        title: "Top React Development Trends to Follow 2024",
        des: "Discover the latest trends shaping React development in 2024. Stay ahead by incorporating these innovations into your projects.",
        btn: "Read More"

    },
    {
        dateIcon: <BsCalendar2Date />,
        date: "Oct, 16, 2026",
        userIcon: <LuUserCircle />,
        userName: "John Smith",
        title: "Why React is Ideal for Web Applications",
        des: "Learn why React is the go-to framework for modern web development. Explore its features and how it benefits your business.",
        btn: "Learn More"
    },
    {
        dateIcon: <BsCalendar2Date />,
        date: "Oct, 16, 2026",
        userIcon: <LuUserCircle />,
        userName: "John Smith",
        title: "Building Scalable Applications with React and Redux",
        des: "Learn how to create scalable applications using React and Redux together. This powerful combination enhances state management and.",
        btn: "Read Guide"
    },

]






const StayUpdate = () => {

    return (
        <section className='cb__section__gap cb__main__sec ' id='blog'>
            <div>
                <div className="cb__heading_center">
                    <p className='cb__short__title'>Industry Insights</p>
                    <h1 className="cb__heading">Stay Updated with the Latest Trends</h1>
                </div>


                {/* stay box */}
                <motion.div
                    variants={fadIn("up", 0)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <div className="cb__blogs__box">

                        {
                            stayInfo.map((item, index) => (
                                <div key={index}
                                    className="cb__staySingle__box cb__border"
                                >
                                    <div className='cb__IconUsers'>
                                        <div className='cb__icon__user'>
                                            <button>{item?.dateIcon}</button>
                                            <p>{item?.date}</p>
                                        </div>
                                        <div className='cb__icon__user'>
                                            <button>{item?.userIcon}</button>
                                            <p>{item?.userName}</p>
                                        </div>
                                    </div>

                                    <div className="cb__TitleDes__space">
                                        <h1 className="cb__blogs__title">{item?.title}</h1>
                                        <p className="cb__blogs__des">{item?.des}</p>
                                        <button className="cb__stay__btn">{item?.btn}</button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default StayUpdate
