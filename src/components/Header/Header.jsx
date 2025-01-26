import headerIMG from '../../images/more/15.jpg'
import logo from '../../images/more/logo1.png'
import './header.css'
const Header = () => {
    return (
        <div>
            <div className=''>
                <div className="w-full h-24 relative flex justify-center items-center">
                    <img className="h-full w-full " src={headerIMG} alt="" />
                    <div className="flex items-center space-x-3 absolute">
                        <img className="w-16 h-20" src={logo} alt="" />
                        <h1 className="rancho-font mt-2 text-4xl text-white">Espresso Emporium</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;