
import React from 'react'


export default function Contact() {
    return (


        <section className='cb__section__gap' id='contact'>
            <div className="bg-[url('/@/assets/contact/contactBg.webp')] cb__contact__content">

                <div className='cb__contact__parentWrapper'>
                    <h2 className='cb__contact__title'>Send a message </h2>
                    <div className='cb__contact__wrapper'>
                        <div>
                            <h3 className='cb__contact__label'><label htmlFor=""> Full Name</label></h3>
                            <input
                                type="text"
                                placeholder="Your text here"
                                autoComplete="off"

                                className='cb__contact__input' />
                        </div>
                        <div>
                            <h3><label htmlFor=""> Email Address</label></h3>
                            <input
                                type="text"
                                placeholder="Your text here"
                                autoComplete="off"

                                className='cb__contact__input' />
                        </div>
                        <div>
                            <h3><label htmlFor=""> Subject</label></h3>
                            <input
                                type="text"
                                placeholder="Your text here"
                                autoComplete="off"

                                className='cb__contact__input' />
                        </div>
                        <div className='cb__contact__inner'>
                            <h3><label htmlFor=""> Phone Number</label></h3>
                            <input
                                type="text"
                                placeholder="Your text here"
                                autoComplete="off"
                                className='cb__contact__input' />
                        </div>

                        <div>
                            <h3><label htmlFor=""> Message</label></h3>
                            <textarea className='cb__contact__input' cols={10} rows={1} placeholder="Your text here" />
                        </div>
                        <div>
                            <h3><label htmlFor=""> Message</label></h3>
                            <textarea className='cb__contact__input' cols={10} rows={1} placeholder="Your text here" />
                        </div>
                    </div>

                    <div className='cb__contact__btn__wrapper'>
                        <button className='cb__contact__btn'>Send Message </button>
                    </div>


                </div>

                {/* adress info  */}

                <div>
                    <h4 className='cb__contact__subTitle'>Find Us</h4>
                    <div className=''>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318789773!2d90.33728815181979!3d23.780975728157536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1729711467938!5m2!1sen!2sbd"
                            className='cb__contact__map'
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>



                    <div className='cb__contact__info'>
                        <div>
                            <h6 className='cb__contact__child__title'>Our Location</h6>
                            <p className='cb__contact__child__subTitle'>1234 React Avenue, Web City, Techland</p>
                        </div>
                        <div>
                            <h6 className='cb__contact__child__title'>Email Address</h6>
                            <p>contact@coreblue.com</p>
                        </div>
                    </div>
                </div>
            </div>


        </section >


    )
}
