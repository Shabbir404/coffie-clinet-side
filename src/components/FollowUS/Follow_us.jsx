import img1 from '../../images/cups/Rectangle 9.png'
import img2 from '../../images/cups/Rectangle 10.png'
import img3 from '../../images/cups/Rectangle 11.png'
import img4 from '../../images/cups/Rectangle 12.png'
import img5 from '../../images/cups/Rectangle 13.png'
import img6 from '../../images/cups/Rectangle 14.png'
import img7 from '../../images/cups/Rectangle 15.png'
import img8 from '../../images/cups/Rectangle 16.png'

const Follow_us = () => {
    const imgs = { img1, img2, img3, img4, img5, img6, img7, img8 };

    return (
        <div>
            <div className='mt-10'>
                <p className='text-center raleway-font '>Follow  Us  Now</p>
                <h1 className='mt-3 mb-8 text-[#331A15]  text-shadows text-center rancho-font text-5xl'>Follow on Instagram</h1>
                <div className='md:grid md:grid-cols-4 space-x-3 space-y-3'>
                    {
                        Object.values(imgs).map((img, i) =>
                            <div key={i}>
                                <img
                                    className="hover:scale-105 transition-transform duration-300 ease-in-out transform cursor-pointer"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Follow_us;
