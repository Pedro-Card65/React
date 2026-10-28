import './index.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="comp-rod">

            <div className="socials">
                
                <a href="https://github.com/Pedro-Card65" target='blank'>
                    <img src="/assets/images/github.png" alt="" />
                    Github
                </a>
                
            </div>

            <div className="socials">

                <a href="https://linkedin.com/in/pedro-cardoso65" target='blank'>
                    <img src = "/assets/images/linkedin.png" alt="" />
                    Linkedin
                </a>
                
            </div>

            <div className="socials">
                
                <a href="https://www.instagram.com/pedro.cardzz" target='blank'>
                    <img src="/assets/images/insta.png" alt="" />
                    Instagram
                </a>
            </div>

            <Link to = '/'>
                <button>Home</button>
            </Link>

        </div>
    )
}