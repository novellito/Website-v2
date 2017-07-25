import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <footer id="contact-section">
                    <h2 className="follow">Follow Me On <i className="fa fa-handshake-o" aria-hidden="true"></i>
                        <div className="container">
                            <div className="row text-center fromBot socials">
                                <a href="https://twitter.com/novellit0" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-1x"></i></a>
                                <a href="https://www.facebook.com/christian.n.trinidad" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-1x"></i></a>
                                <a href="https://www.instagram.com/cnovellito/" target="_blank" rel="noopener noreferrer">
                                   <i className="fa fa-instagram fa-1x"></i></a>
                            </div>
                        </div>
                    </h2>
                </footer>
            </div>
        );
    }
}

export default Contact;
