import React, {Component} from 'react';
import Experience from '../../components/Experience/Experience';
import Tools from '../../components/Tools/Tools';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import Landing from '../../components/Landing/Landing';
import About from '../../components/AboutMe/AboutMe';
import Navbar from '../../components/Navbar/Navbar';
import $ from 'jquery';
import  'jquery.easing';

class Home extends Component {

    componentDidMount() {
         $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            console.log($anchor);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        var scroll = $(document).scrollTop();
        var headerHeight = $('.page-header').outerHeight();

        $(window).scroll(function () {
            var scrolled = $(document).scrollTop();
            if (scrolled > headerHeight) {
                $('.page-header').addClass('off-canvas');
            } else {
                $('.page-header').removeClass('off-canvas');
            }

            if (scrolled > scroll) {
                $('.page-header').removeClass('fixed');
            } else {
                $('.page-header').addClass('fixed');
            }
            scroll = $(document).scrollTop();
        });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Landing/>
                <About/>
                <Experience/>
                <Tools/>
                <Projects/>
                <Footer/>
            </div>
        );
    }

};

export default Home;