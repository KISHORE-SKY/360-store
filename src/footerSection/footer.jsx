import {Link} from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoMailSharp } from "react-icons/io5";

function Footer() {
    return(
        <>
            <footer className="grid grid-cols-1 justify-center w-full gap-3 pt-5 pb-5 bg-green-navbar text-text-navbar p-3
            sm:grid-cols-2 md:justify-start md:p-4 lg:grid-cols-[minmax(360px,375px)_repeat(3,minmax(175px,200px))]">
                <div className="flex justify-center md:justify-start">
                    <h1 className="font-semibold text-lg lg:text-2xl">360-Store</h1>
                </div>

                <div className="footer-boxses">
                    <h3 className="font-semibold">Quik Navigation</h3>
                    <ul>
                        <li><Link className="no-underline cursor-pointer hover:opacity-60 text-text-navbar" to="/">Home</Link></li>
                        <li><a className="footer-links">Products</a></li>
                        <li><a className="footer-links">Signup</a></li>
                        <li><a className="footer-links">Login</a></li>
                    </ul>
                </div>

                <div className="footer-boxses">
                    <h3 className="font-semibold">Supports</h3>
                    <ul>
                        <li><Link href="#" className="footer-links">Order Tracking</Link></li>
                        <li><Link className="footer-links">Return Policy</Link></li>
                        <li><Link className="footer-links">Privacy Policy</Link></li>
                        <li><Link className="footer-links">FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-boxses">
                    <h3 className="font-semibold">Connect</h3>
                    <ul>
                        <div className="footer-connects">
                            <IoMailSharp />
                            <li><a className="footer-links " href="mailto:skkishore1273@gmail.com">Email</a></li>
                        </div>
                        
                        <div className="footer-connects">
                            <FaGithub />
                            <li><a className="footer-links" href="https://github.com/KISHORE-SKY/">Github</a></li>
                        </div>
                        <div className="footer-connects">
                            <FaLinkedin />
                            <li><a className="footer-links" href="https://www.linkedin.com/in/kishore017/">Linkedin</a></li>
                        </div>
                        <div className="footer-connects">
                            <SiNetlify />
                            <li><a className="footer-links" href="https://www.netlify.com/partners/technology/">Netlify</a></li>
                        </div>
                       
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;