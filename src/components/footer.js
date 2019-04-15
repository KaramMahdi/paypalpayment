import React, { Component } from 'react';
import {all_css_posts,setting_api} from './../config/config';
import { Link } from "react-router-dom";

class Footer extends Component {
     state={
        blogs:[{
            nid:0,
            title:"",
            image:"",
            date:"",

        }]
   
        
     
    };

    componentWillMount=()=> {
         fetch(setting_api)
            .then(blob2 => blob2.json())
            .then(data2 => {
            var reactjs_blog=[],reactjs_video=[];
              for(var i=0;i<data2.types.length;i++)
                  {
                      if(data2.types[i].node_type=="reactjs_blog")
                          {
                             reactjs_blog= data2.types[i].fields;
                          }
                      else if(data2.types[i].node_type=="reactjs_videos")
                              {
                                                           reactjs_video= data2.types[i].fields;

                              }
                      
                  }
              
             fetch(all_css_posts)
            .then(blob => blob.json())
            .then(data => {
          
                let mainmenu =[]
                for (var i=0;i<data.results.length;i++)
                {     var day="",month="",year="",fulldate="";
            var datefull = new Date(data.results[i].created[0].value.toString());
           day = datefull.getDate();
            month = datefull.getMonth();
             year = datefull.getFullYear();
            fulldate=day+"/"+month+"/"+year
                    if(i==3){
                        break;
                    }
                    if (data.results[i][reactjs_video.image] !=null)
                    {

                                           

                            let blogs = {
                                nid: data.results[i].nid[0].value,

                                title: data.results[i].title[0].value,
                                image: data.results[i][reactjs_video.image][0].url,
                                date: fulldate

                            };
                            mainmenu.push(blogs);

                    }
                    else
                    {
                        var bodeImage="";          
                        if(reactjs_blog.image.length>0){
                            bodeImage=data.results[i][reactjs_blog.image][0].url
                            
                        }

                        
                            let blogs = {
                                nid: data.results[i].nid[0].value,
                                title: data.results[i].title[0].value,
                                   image: bodeImage,
                                
                             
                                date: fulldate

                            };
                            mainmenu.push(blogs);

                    }




                }
                this.setState({blogs:mainmenu})

            })

         });

        
    }
    
    render() {
        return (
            <div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <h3>Paragraph</h3>
                                <p>
                                    <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid"/>
                                </p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusantium optio
                                    unde perferendis eum illum voluptatibus dolore tempora, consequatur minus asperiores
                                    temporibus reprehenderit.</p>
                            </div>
                            <div className="col-md-6 ml-auto">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h3>Latest Post</h3>
                                        <div className="post-entry-sidebar">
                                            <ul>
            {this.state.blogs.map((item,index) => (
                                                <li key={index}>
                                                    <Link to={"Blog-Single?id="+item.nid}>
             { (item.image!=null)?
        <img src={item.image} style={{height: "61px"}}  alt="Image placeholder"className="mr-4"/>
    :<span></span>
}
                                                            <div className="text">
                                                                <h4>{item.title}</h4>
                                                                <div className="post-meta">
                                                                    <span
                                                                        className="mr-2">{item.date} </span>
                                                                    <span className="ml-2"><span
                                                                        className="fa fa-comments"></span> 3</span>
                                                                </div>
                                                            </div>
                                                    </Link>
                                                </li>
                                          ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>

                                    <div className="col-md-4">

                                        <div className="mb-5">
                                            <h3>Quick Links</h3>
                                            <ul className="list-unstyled">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Travel</a></li>
                                                <li><a href="#">Adventure</a></li>
                                                <li><a href="#">Courses</a></li>
                                                <li><a href="#">Categories</a></li>
                                            </ul>
                                        </div>

                                        <div className="mb-5">
                                            <h3>Social</h3>
                                            <ul className="list-unstyled footer-social">
                                                <li><a href="#"><span className="fa fa-twitter"></span> Twitter</a></li>
                                                <li><a href="#"><span className="fa fa-facebook"></span> Facebook</a>
                                                </li>
                                                <li><a href="#"><span className="fa fa-instagram"></span> Instagram</a>
                                                </li>
                                                <li><a href="#"><span className="fa fa-vimeo"></span> Vimeo</a></li>
                                                <li><a href="#"><span className="fa fa-youtube-play"></span> Youtube</a>
                                                </li>
                                                <li><a href="#"><span className="fa fa-snapchat"></span> Snapshot</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                Copyright &copy;
                         2019
                                All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                    aria-hidden="true"></i> by <a
                                href="https://colorlib.com" >Colorlib</a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}
export default Footer;
