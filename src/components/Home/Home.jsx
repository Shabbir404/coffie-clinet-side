import coffieIMG from '../../images/more/3.png'
import coffie1 from '../../images/icons/1.png'
import coffie2 from '../../images/icons/2.png'
import coffie3 from '../../images/icons/3.png'
import coffie4 from '../../images/icons/4.png'
import './home.css'
const Home = () => {
    return (
        <div>
            <div className='w-full relative flex'>
                <img className='w-full md:h-[640px]' src={coffieIMG} alt="" />
                <div className='absolute md:ml-[800px] md:mt-62 mt-10 '>
                    <h1 className='rancho-font text-center md:text-left md:text-5xl text-2xl text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-center md:text-left md:mt-5 mt-2 text-white raleway-font md:w-[724px]'>It`s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className='justify-center flex md:justify-start'>
                        <button className=' md:mt-5 mt-3 pl-4 pr-4 pt-2 pb-2 text-xl rancho-font
                     background-color'>Learn More</button>
                    </div>
                </div>
            </div>
            {/* top discribe */}
            <div className='w-full h-[250px] bg-[#ECEAE3] hidden md:block'>
                <div className='w-8/12 mx-auto flex md:space-x-8 justify-center'>
                    <div className='mt-12'>
                        <img className='w-14 h-14' src={coffie1} alt="" />
                        <h1 className='rancho-font text-[#331A15] text-3xl mt-2'>Awesome Aroma</h1>
                        <p className='w-[301px]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='mt-12'>
                        <img className='w-14 h-14' src={coffie2} alt="" />
                        <h1 className='rancho-font text-[#331A15] text-3xl mt-2'>High Quality</h1>
                        <p className='w-[301px]'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='mt-[49px]'>
                        <img className='w-14 h-14' src={coffie3} alt="" />
                        <h1 className='rancho-font text-[#331A15] text-3xl mt-2'>Pure Grades</h1>
                        <p className='w-[301px]'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='mt-12'>
                        <img className='w-14 h-14' src={coffie4} alt="" />
                        <h1 className='rancho-font text-[#331A15] text-3xl mt-2'>Proper Roasting</h1>
                        <p className='w-[290px]'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            {/* top discribe end */}
        </div>
    );
};

export default Home;