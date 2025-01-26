import coffieIMG from '../../images/more/3.png'
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
        </div>
    );
};

export default Home;