/* eslint-disable no-unused-vars */
import React from 'react'
import "./Contact.css"
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better{" "}</span>

                <div className="flexColStart contactModes">
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <div className="image-container">
                    <img src="/public/contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact