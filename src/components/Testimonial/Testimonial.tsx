"use client"
import Image from "next/image";
import fImg1 from "../../public/assets/image/footImg1.webp"
import fImg2 from "../../public/assets/image/footImg2.webp"
import fImg3 from "../../public/assets/image/footImg3.webp"
import USA from "../../public/assets/testimonial/usa.webp"
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion"
import { fadIn } from '../varient';

const about = {
    para: "Client Feedback",
    heading: "What Our Clients Say",
    subHeading: "Our clients' success stories reflect the quality of our services. Read their testimonials and see how we've helped them achieve their",
    info: [
        {
            des: "The team delivered beyond our expectations! Our web app is fast, reliable, and beautifully designed. Their expertise in React is unmatched.",
            userImg: fImg1,
            userName: "John Smith",
            position: "CEO, Tech Innovators",
            flag: USA,
        },
        {
            des: "Working with them was seamless from start to finish. They understood our vision and translated it into a highly functional, user-friendly website.",
            userImg: fImg2,
            userName: "frenk Striling",
            position: "Marketing Director",
            flag: USA,
        },
        {
            des: "Their attention to detail and commitment to quality really impressed us. Our custom solution was delivered on time and works flawlessly.",
            userImg: fImg3,
            userName: "Jack Grelish",
            position: "Founder, GreenWave",
            flag: USA,
        },
        {
            des: "Their workflow and communication were excellent. The final product exceeded our expectations, and our customers love the new interface.",
            userImg: fImg3,
            userName: "Tom Morinson",
            position: "COO, NextGen Systems",
            flag: USA,
        },
    ]
}


export default function Testimonial() {
    return (
        <section className="cb__section__gap">
            <div className="cb__testtimonial__sec ">
                <div className='cb__textLeft__box'>
                    <p className="cb__short__title">{about.para}</p>
                    <h1 className="cb__testimonial__heading">{about.heading}</h1>
                    <h3 className="cb__testimonial__subHeading ">{about.subHeading}</h3>
                    <div className="cb__testimonialBtn__sec">
                        <button className="cb__border cb__btn__styles cb__contact__btn">Contact Us</button>
                        <button className="cb__help__btn">
                            Help Center
                            <FaArrowRightLong className="cb__helpCenter__arrow" />
                        </button>
                    </div>
                </div>

                {/* testimonial cards  */}
                <div className="cb__testimonialCard__sec">
                    <motion.div
                        variants={fadIn("up", 0)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}

                    >
                        <div className="cb__testimonial__cardBox">
                            {
                                about?.info?.map((item, index) => (
                                    <div key={index} className="cb__testimonial__singleBox">
                                        <p className="cb__testimonial__boxDes">{item?.des}</p>

                                        <div className="cb__testimonial__usersInfo">
                                            <div>
                                                <Image className="cb__testimonial__usersImg " src={item.userImg} alt="" width={100} height={100} />
                                            </div>
                                            <div>
                                                <h1 className="cb__testimonial__usersName">{item?.userName}</h1>
                                                <p className="cb__users__position__flag cb__users__position">
                                                    <Image className="cb__testimonial__flag" src={item?.flag} alt="" width={100} height={100} />
                                                    {item?.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
