import './index.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="comp-rod">

            <div className="github">

                
                <a href="https://github.com/Pedro-Card65">
                    <img src="/assets/images/github.png" alt="" />
                    Github
                </a>
                
                
            </div>

            <div className="linkedin">

                
                <a href="https://linkedin.com/in/pedro-cardoso65">
                    <img src = "/assets/images/linkedin.png" alt="" />
                    Linkedin
                </a>
                

            </div>

        </div>
    )
}