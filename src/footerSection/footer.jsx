import {Link} from "react-router-dom";

function Footer() {
    return(
        <>
            <footer className="grid grid-cols-1 justify-center gap-3 pt-5 pb-5 bg-green-navbar text-text-navbar p-3">
                <div className="flex justify-center">
                    <h1 className="font-semibold text-lg">360-Store</h1>
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
                        <li><a className="footer-links">Order Tracking</a></li>
                        <li><a className="footer-links">Return Policy</a></li>
                        <li><a className="footer-links">Privacy Policy</a></li>
                        <li><a className="footer-links">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-boxses">
                    <h3 className="font-semibold">Connect</h3>
                    <ul>
                        <li><a className="footer-links">Email</a></li>
                        <li><a className="footer-links">Github</a></li>
                        <li><a className="footer-links">Linkedin</a></li>
                        <li><a className="footer-links">Netlify</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;