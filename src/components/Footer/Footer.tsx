"use client"
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import fImg1 from "../../public/assets/image/footImg1.webp"
import fImg2 from "../../public/assets/image/footImg2.webp"
import fImg3 from "../../public/assets/image/footImg3.webp"
import darkLogo from "../../public/assets/logo/1.webp"
import darkLight from "../../public/assets/logo/2.webp"

import { motion } from "framer-motion"
import { fadIn } from '../varient';

export default function Footer() {
  return (
    <>
      <section className="cb__secondaray__bg cb__footer__space">

        {/* Parents div */}
        <div className="cb__footer__section ">

          {/* footer Logo */}
          <div>
            <div>
              {/* header Logo */}
              <div className="hidden dark:block">
                <Image
                  height={100}
                  width={100}

                  alt="dark logo"
                  src={darkLight}
                ></Image>
              </div>

              <div className="dark:hidden">
                <Image
                  height={100}
                  width={100}
                  alt="dark logo"
                  src={darkLogo}
                ></Image>
              </div>
            </div>

            <motion.div
              variants={fadIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className="cb__foot___info_space">

                <h2 >
                  <strong className="cb__footer__info">Email :</strong> <span className="cb__info__span">kokori8936@chysir.com</span>
                </h2>
                <h2 >
                  <strong className="cb__footer__info">Website :</strong> <span className="cb__info__span">www.devmamunbd.com</span>
                </h2>
                <h2>
                  <strong className="cb__footer__info">Email :</strong> <span className="cb__info__span">Sylhet, bangladesh</span>
                </h2>


              </div>
            </motion.div>

            {/* Social-Links */}
            <div className="cb__footerIcon__sec">
              <Link href="https://www.facebook.com/resolveIdea" target="_blank">
                <FaFacebook className="cb__footer__icons" />
              </Link>
              <Link href="https://www.instagram.com/resolve_idea_agency/" target="_blank">
                <FaInstagram className="cb__footer__icons" />
              </Link>
              <Link href="https://www.linkedin.com/company/resolveidea" target="_blank">
                <FaLinkedin className="cb__footer__icons" />
              </Link>
              <Link href="https://x.com/resolveIdea" target="_blank">
                <FaTwitter className="cb__footer__icons" />
              </Link>
              <Link href="#">
                <FaYoutube className="cb__footer__icons" />
              </Link>
            </div>
          </div>


          {/* Services */}
          <div>
            <h1 className="cb__service__title">Services</h1>
            <motion.div

              variants={fadIn("down", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className="cb__service__category">
                <p>Web Application Development</p>
                <p>App Application Development</p>
                <p>SaaS Development</p>
                <p>UI/UX Design</p>
                <p>Digital Maketing</p>
                <p>Serch Engine Optimization</p>
              </div>
            </motion.div>
          </div>

          {/* NewsLetter */}
          <div className="">
            <div className="cb__footerNews__space">
              <button className="cb__footer__newsletter">
                Newsletter
              </button>

              <h1 className="cb__sing__up">Sing Up For Subscribe Out Newsletters</h1>

              <div className="cb__footer__input__btn ">
                <input className="cb__foot__input" type="email" placeholder="Your Email" />
                <button className="cb__foot__subs__btn ">
                  Subscribe
                </button>
              </div>

              <motion.div
                variants={fadIn("down", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="cb__footer__img cb__footerNews__img">
                  <Image className="cb__footer__img__style" src={fImg1} alt="img1" height={100} width={100} />
                  <Image className="cb__footer__img__style" src={fImg2} alt="img2" height={100} width={100} />
                  <Image className="cb__footer__img__style" src={fImg3} alt="img3" height={100} width={100} />

                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* copyRight */}
      <div className="">
        <p className="cb__copy__right">
          © {new Date().getFullYear()} Copyright <a href="https://resolveidea.com/" className="text-blue-500 hover:underline">Resolve Idea</a>
        </p>
      </div>
    </>
  );
}
