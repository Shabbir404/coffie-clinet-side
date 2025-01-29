import footerIMG from '../../images/more/13.jpg'
import logoIMG from '../../images/more/logo1.png'
import '../Footer/footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='mt-10'>

            <div className='relative'>
                <div>
                    <img className='bg-cover h-full md:h-[580px] w-full' src={footerIMG} alt="" />
                </div>
                <div className='md:w-8/12 w-10/12 mx-auto absolute top-0 left-0 right-0'>
                    <div className='mt-16'>
                        <img className='w-20' src={logoIMG} alt="" />
                    </div>
                    <div className='md:flex '>
                        <div>
                            <h1 className='rancho-font text-4xl text-outlines mt-5'>Espresso Emporium</h1>
                            <p className='md:w-[550px] mt-5 tracking-normal text-[#1B1A1A] raleway-font'>
                                Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                            </p>

                            {/* icons div */}
                            <div className='flex space-x-8 mt-5  text-[#331A15]'>
                                <ImFacebook2 className='text-4xl '></ImFacebook2>
                                <FaSquareXTwitter className='text-4xl'></FaSquareXTwitter>
                                <FaInstagram className='text-4xl'></FaInstagram>
                                <FaLinkedin className='text-4xl'></FaLinkedin>
                            </div>
                            {/* icons div end */}
                            <h1 className='rancho-font text-3xl text-outlines mt-8'>Get In Touch</h1>

                            <div className='mt-8 space-y-3'>
                                <div className='flex space-x-3'>
                                    <FaPhoneAlt className='mt-1'></FaPhoneAlt>
                                    <p className='raleway-font'>123456789</p>
                                </div>
                                <div className='flex space-x-3'>
                                    <MdEmail className='mt-1'></MdEmail>
                                    <p className='raleway-font'>info@sb.com</p>
                                </div>
                                <div className='flex space-x-3'>
                                    <FaLocationDot className='mt-1'></FaLocationDot>
                                    <p className='raleway-font'>Some,Whare,+0-1*2/4</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact div */}
                        <div>
                            <h1 className='rancho-font text-3xl text-outlines mt-5' >Connect with Us</h1>
                            <input className='pr-48 p-2 bg-white mt-4 rounded-md border-none' placeholder='Name' type="text" />
                            <br />
                            <input className='pr-48 p-2 bg-white mt-3 rounded-md border-none' placeholder='Email' type="text" />
                            <br />
                            <input className='pr-48 pb-20 p-2 bg-white mt-3  rounded-md border-none' placeholder='Message' type="text" />
                            <button className='border-[#331A15] mt-4 border-2 rounded-full p-2 pl-10 pr-10
                            rancho-font md:text-xl hover:bg-[#D2B48C] cursor-pointer mb-5'>Submit</button>
                        </div>
                        {/* contact div end */}

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;