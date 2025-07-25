import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={youtube_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={facebook_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Centre</li>
                <li>Gift Cards</li>
                <li>Media Centre</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Term of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Prefrences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'>© 2025 Netflix clone by Hugo </p>
        </div>
    )
}

export default Footer