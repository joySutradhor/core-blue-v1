"use client"
import Image from "next/image";
import client from '../../public/assets/home/client.webp'
import client1 from '../../public/assets/home/client1.webp'
import client2 from '../../public/assets/home/client2.webp'
import Chart from "./Chart";
import Btn from "../utilites/btn";
import { motion } from "framer-motion"
import { fadIn } from '../varient';



export default function Banner() {
  return (
    <section className="cb__banner__gap" id="#banner">
      <div className="cb__banner__parent">
        <motion.div
          variants={fadIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}

        >
          <div className="md:w-5/6 xl:w-3/4">
            <h1 className="cb__bnner__title " >Gain revenue on your business with powerful marketing</h1>
            <div>
              <p className="cb__bnner__des ">We build high-performance web applications tailored to your business needs. Our team focuses on delivering scalable, modern solutions.</p>

              <div className="cb__banner__counter ">


                <div className="cb__banner__counter__child">
                  <h4 className=" cb__banner__counter__title">72.2%</h4>
                  <p className="cb__banner__counter__des">Average Daily Users</p>
                </div>

                <div>
                  <h4 className="cb__banner__counter__title"> ~ 22 K</h4>
                  <p className="cb__banner__counter__des">Daily Daily Users</p>
                </div>

              </div>

              <div >
                <div className="cb__banner__clinet__wrapper">
                  <div>
                    <Btn btnText="Introductions"></Btn>
                  </div>
                  <div className="cb__banner__client__child">
                    <Image
                      src={client}
                      alt="client One"
                      height={100}
                      width={100}
                      className=" cb__banner__client__img"
                    ></Image>
                    <Image
                      src={client1}
                      alt="client One"
                      height={100}
                      width={100}
                      className="cb__banner__client__img  cb__banner__client__absoulate"
                    ></Image>
                    <Image
                      src={client2}
                      alt="client One"
                      height={100}
                      width={100}
                      className="cb__banner__client__img"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="cb__banner__active__title"><span>100</span> <span>K +</span></h6>
                    <p className="cb__banner__active__des">Clients Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* banner chart use from recharts */}
        <div className="flex justify-center xl:block hidden">
          <motion.div 
          variants={fadIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          >
            <Chart />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
