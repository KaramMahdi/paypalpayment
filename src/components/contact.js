import React, { Component } from 'react';
import Footer from "./footer.js";
import Header from "./header.js";
import {Animated} from "react-animated-css";



class contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <section className="site-section">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h1>Contact</h1>
                            </div>
                        </div>
                        <div className="row blog-entries">
                            <div className="col-md-12 col-lg-8 main-content">

                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" className="form-control "/>
                                        </div>
                                        <div className="col-md-4 form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" className="form-control "/>
                                        </div>
                                        <div className="col-md-4 form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" className="form-control "/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="message">Write Message</label>
                                            <textarea name="message" id="message" className="form-control " cols="30"
                                                      rows="8"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="submit" value="Send Message" className="btn btn-primary"/>
                                        </div>
                                    </div>
                                </form>


                            </div>


                            <div className="col-md-12 col-lg-4 sidebar">
                                <div className="sidebar-box search-form-wrap">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <span className="icon fa fa-search"></span>
                                            <input type="text" className="form-control" id="s"
                                                   placeholder="Type a keyword and hit enter"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box">
                                    <div className="bio text-center">
                                        <img src="images/person_1.jpg" alt="Image Placeholder" className="img-fluid"/>
                                            <div className="bio-body">
                                                <h2>Meagan Smith</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Exercitationem facilis sunt repellendus excepturi beatae porro
                                                    debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                                                <p><a href="#" className="btn btn-primary btn-sm">Read my bio</a></p>
                                                <p className="social">
                                                    <a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="p-2"><span className="fa fa-twitter"></span></a>
                                                    <a href="#" className="p-2"><span
                                                        className="fa fa-instagram"></span></a>
                                                    <a href="#" className="p-2"><span
                                                        className="fa fa-youtube-play"></span></a>
                                                </p>
                                            </div>
                                    </div>
                                </div>
                                <div className="sidebar-box">
                                    <h3 className="heading">Popular Posts</h3>
                                    <div className="post-entry-sidebar">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src="images/img_2.jpg" alt="Image placeholder"
                                                         className="mr-4"/>
                                                        <div className="text">
                                                            <h4>There’s a Cool New Way for Men to Wear Socks and
                                                                Sandals</h4>
                                                            <div className="post-meta">
                                                                <span className="mr-2">March 15, 2018 </span> &bullet;
                                                                <span className="ml-2"><span
                                                                    className="fa fa-comments"></span> 3</span>
                                                            </div>
                                                        </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="images/img_4.jpg" alt="Image placeholder"
                                                         className="mr-4"/>
                                                        <div className="text">
                                                            <h4>There’s a Cool New Way for Men to Wear Socks and
                                                                Sandals</h4>
                                                            <div className="post-meta">
                                                                <span className="mr-2">March 15, 2018 </span> &bullet;
                                                                <span className="ml-2"><span
                                                                    className="fa fa-comments"></span> 3</span>
                                                            </div>
                                                        </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="images/img_12.jpg" alt="Image placeholder"
                                                         className="mr-4"/>
                                                        <div className="text">
                                                            <h4>There’s a Cool New Way for Men to Wear Socks and
                                                                Sandals</h4>
                                                            <div className="post-meta">
                                                                <span className="mr-2">March 15, 2018 </span> &bullet;
                                                                <span className="ml-2"><span
                                                                    className="fa fa-comments"></span> 3</span>
                                                            </div>
                                                        </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-box">
                                    <h3 className="heading">Categories</h3>
                                    <ul className="categories">
                                        <li><a href="#">Courses <span>(12)</span></a></li>
                                        <li><a href="#">News <span>(22)</span></a></li>
                                        <li><a href="#">Design <span>(37)</span></a></li>
                                        <li><a href="#">HTML <span>(42)</span></a></li>
                                        <li><a href="#">Web Development <span>(14)</span></a></li>
                                    </ul>
                                </div>

                                <div className="sidebar-box">
                                    <h3 className="heading">Tags</h3>
                                    <ul className="tags">
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Adventure</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Freelancing</a></li>
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Adventure</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Freelancing</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
);
}
}
export default contact;
