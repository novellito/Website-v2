import React, {Component} from 'react';
import instagram from '../img/Instagram.svg';
import twitter from '../img/Twitter.svg';
import facebook from '../img/Facebook.svg';
class Contact extends Component {
    render() {
        return (
            <div>
                <footer id="contact-section">
                    <h2 className="follow">Follow Me On
                        <div className="container">
                            <div className="row text-center fromBot">
                                <a href="https://twitter.com/novellit0" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter"/></a>
                                <a href="https://www.facebook.com/christian.n.trinidad" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"/></a>
                                <a href="https://www.instagram.com/cnovellito/" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram} alt="instagram"/></a>
                            </div>
                        </div>
                    </h2>
                </footer>

            </div>
        );
    }
}

export default Contact;
