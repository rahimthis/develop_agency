import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

function Navbar() {


    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    // togle menu Option
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const handeleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true)
            } else (
                setSticky(false)
            )
        };
        window.addEventListener('scroll', handeleScroll);
        return () => {
            window.addEventListener('scroll', handeleScroll);
        };
    }, [])

    const nagOption = [
        { link: "Home", path: "home" },
        { link: "Services", path: "services" },
        { link: "portfolio", path: "portfolio" },
        { link: "Reviews", path: "reviews" },
        { link: "About", path: "abour" },
    ]
    return (
        <>
            <header className="w-full  bg-white fixed top-0 left-0 right-0">
                <nav className={` py-4 lg:px-14 px-4 ${sticky? 'sticky top-0 left-0 right-0 bg-white' : ''}`}>
                    <div className="flex justify-between items-center text-base gap-8">
                        <a className="text-2xl font-semibold " href="">
                            Develop Agency
                        </a>
                        {/* nav item for large devices  */}
                        <ul className="md:flex space-x-12 hidden">
                            {
                                nagOption.map(({ link, path }) => <Link key={path} smooth={true} spy={true} offset={-100} to={path}> {link}</Link>)
                            }

                        </ul>
                        {/* btn for large devices */}
                        <div className="space-x-12 hidden lg:flex items-center">
                            <a href="" className="bg-[#2ecc71] text-lg text-white py-2 px-4 transition-all duration-300 rounded     hover:bg-white hover:text-[#2ecc71] border-2 border-solid border-r-2">Contact Us</a>

                        </div>

                        {/* icon menu for mobile device */}
                        <div className=" md:hidden ">
                            <button className="focus:text-gray-500 focus:outline-none  ">
                                {
                                    menuOpen ? (<FaXmark className="h-6 w-6 " />) : (<FaBars className="h-6 w-6 " />)
                                }
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Navbar;