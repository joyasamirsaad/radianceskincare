import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="footer-div container mx-auto px-4">
            <div className="footersections desc">
                <h2 className="font-bold"><i className="fa-solid fa-location-dot" style={{color: "#fff8f0"}}></i>Address</h2>
                <p>Radiance Skincare Studio<br></br>2847 Glow Avenue<br></br>Beauty Hills, CA 90210</p>     
            </div>
            <div className="footersections desc">
            <h2 className="font-bold"><i className="fa-solid fa-handshake" style={{color: "#fff8f0"}}></i>Contact Info</h2>
            <p><i className="fa-solid fa-phone" style={{color: "#fff8f0"}}></i><b>Phone:</b>  (555) GLOW-01 | (555) 456-9201
                <br></br><br></br><i className="fa-solid fa-envelope" style={{color: "#fff8f0"}}></i><b>Email:</b>  info@radianceskincare.com
                <br></br><br></br><i className="fa-solid fa-user" style={{color: "#fff8f0"}}></i><b>Customer Service:</b>  hello@radianceskincare.com</p>     
            </div>
            <div className="footersections desc">
                <h2 className="font-bold"><i className="fa-solid fa-clock" style={{color: "#fff8f0"}}></i>Business Hours</h2>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br></br>Saturday: 10:00 AM - 4:00 PM<br></br>Sunday: Closed</p>     
            </div>
            <div className="footersections desc">
                <h2 className="font-bold"><i className="fa-solid fa-info" style={{color: "#fff8f0"}}></i>Additional Info</h2>
                <p>Est. 1971<br></br>Newsletter signup available<br></br>Free shipping on orders over $50<br></br>Satisfaction guaranteed or your money back</p>     
            </div>
            <div className="footersections desc">
                <h2 className="font-bold">Follow us: @RadianceSkincare</h2>
                <div className="social-icons">
                    <Link href="#" aria-label="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#" aria-label="Instagram" target="_blank"><i className="fab fa-instagram"></i></Link>
                </div>    
            </div>
            <div className="desc legal">
                <p>© 2025 Radiance Skincare. All rights reserved. Privacy Policy | Terms of Service | Cookie Policy</p>     
            </div>
        </div>
        

        
    </footer>
  );
}