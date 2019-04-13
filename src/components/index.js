import React, { Component } from 'react';
import Footer from "./footer.js";
import Header from "./header.js";
<<<<<<< HEAD
import Sidebar from "./sidebar.js";
=======
>>>>>>> 62f75f50158d67eca6cbe00ba4d7ec1caf3e08f9


import {Animated} from "react-animated-css";
import { Link } from "react-router-dom";

import ScrollAnimation from 'react-animate-on-scroll';
import {all_posts,category_type} from './../config/config';
import OwlCarousel, { Options } from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "animate.css/animate.min.css";
import axios from 'axios';






class index extends Component {
    state={
        type:[],
        blogs:[{
            nid:0,
            typenameid:0,
            typeId:"",
            title:"",
            image:"",
            date:"",
            type:""

        }],
          blogsPager:[{
            nid:0,
            typenameid:0,
            typeId:"",
            title:"",
            image:"",
            date:"",
            type:""

        }],
        
        NumberOfPage:0,
        pageSelected:0
        
    };
   
componentDidMount=()=>
{
                      let mainmenu =[];

        fetch(all_posts)
            .then(blob => blob.json())
            .then(data => {
             
            var typeId="",typename="",image="";
                for (var i=0;i<data.results.length;i++)
                {
                    if(data.results[i].field_category!=null)
                        {
                            typeId=data.results[i].field_category[0].target_id;
                         image=data.results[i].field_rjs_image[0].url;
                            
                        }
                    else{
                   typeId=data.results[i].field_video_category[0].target_id;
                        image=data.results[i].field_video_image[0].url;

                        
                    }

                
                    
                    
                      let blogs = {
                                nid: data.results[i].nid[0].value,
                          typenameid:i,
                                typeId:typeId,
                                title: data.results[i].title[0].value,
                                image: image,
                                date:data.results[i].created[0].value, 
                                type:""

                            };
                         mainmenu.push(blogs);
                   

          
                }
           

         
                this.setState({blogs:mainmenu});
                     let menutype=[];
            this.pageChange({index:0});

    for(var c=0;c<this.state.blogs.length;c++)
        {
             fetch(category_type(this.state.blogs[c].typeId))
            .then(blob => blob.json())
            .then(data => {
                 menutype.push(data.name[0].value);
                 this.setState({type:menutype})
                 

             })
        
    }


            });
         console.log(this.state.blogs);

      
}
componentDidUpdate=()=>{
      var dotsList=document.getElementsByClassName("owl-dot");
    for (var i=0;i<dotsList.length;i++)
    {
      dotsList[i].firstElementChild.style.display="none";
    }
}

pageChange=(index)=>{
  this.setState({pageSelected:index.index});
        var pagerList=document.getElementsByClassName("pagerclass");
  for(var i=0;i<pagerList.length;i++)
        {
               pagerList[i].classList.remove("active");

        }
    
    var pagerListSelected=document.getElementsByClassName("pagerclass"+(index.index+1));
   pagerListSelected[0].classList.add("active");
    let arrayOfPosts=[];
        var item=index.index,itemCompare=0;
        if(item!=0)
            {
                itemCompare=index.index+3;
            }
    
    for(var i=itemCompare;i<itemCompare+4;i++)
        {
            console.log(this.state.blogs.length);
                        console.log(i);

            if(i==this.state.blogs.length)
               {
break;
               }
            else
                {
  arrayOfPosts.push(this.state.blogs[i]);
   
                }

        
    }
    this.setState({blogsPager:arrayOfPosts})
}
nextClick=()=>{
            const numOfPage=Math.ceil(this.state.blogs.length/4);
    var pageSelected=this.state.pageSelected;
    if(pageSelected+1<numOfPage)
       {

       this.pageChange({index:pageSelected+1});
       }
    
    
}
prevClick=()=>{
    var pageSelected=this.state.pageSelected;
    if(pageSelected>0)
       {


       this.pageChange({index:pageSelected-1});
       }
}



    render() {
      
 
       const numOfPage=Math.ceil(this.state.blogs.length/4);
       const ArrayOfPage=[];
       for(var x=1;x<=numOfPage;x++)
           {
               ArrayOfPage.push(x);
               
           }

                
        const options = {
            loop:true,
            autoplay: true,
            margin:10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:true,
            dots:true,
            autoplayHoverPause: true,
            items: 1,
            navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true
                }
            }
        };
        return (
            <div>
                <Header/>
   <section className="site-section pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <OwlCarousel className="owl-carousel owl-theme home-slider"
                                             {...options}


                                >
                                    <div>
                                        <a href="blog-single.html"
                                           className="a-block d-flex align-items-center height-lg"
                                           style={{backgroundImage: 'url(./images/img_1.jpg)'}}>
                                            <div className="text half-to-full">
                                                <div className="post-meta">
                                                    <span className="category">Lifestyle</span>
                                                    <span className="mr-2">March 15, 2018 </span> &bullet;
                                                    <span className="ml-2"><span
                                                        className="fa fa-comments"></span> 3</span>
                                                </div>
                                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                                                    nobis, ut dicta eaque ipsa laudantium!</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="blog-single.html"
                                           className="a-block d-flex align-items-center height-lg"
                                           style={{backgroundImage: 'url(./images/img_2.jpg)' }}>
                                            <div className="text half-to-full">
                                                <div className="post-meta">
                                                    <span className="category">Lifestyle</span>
                                                    <span className="mr-2">March 15, 2018 </span> &bullet;
                                                    <span className="ml-2"><span
                                                        className="fa fa-comments"></span> 3</span>
                                                </div>
                                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                                                    nobis, ut dicta eaque ipsa laudantium!</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="blog-single.html"
                                           className="a-block d-flex align-items-center height-lg"
                                           style={{backgroundImage: 'url(./images/img_3.jpg)' }}>
                                            <div className="text half-to-full">
                                                <div className="post-meta">
                                                    <span className="category">Lifestyle</span>
                                                    <span className="mr-2">March 15, 2018 </span> &bullet;
                                                    <span className="ml-2"><span
                                                        className="fa fa-comments"></span> 3</span>
                                                </div>
                                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                                                    nobis, ut dicta eaque ipsa laudantium!</p>
                                            </div>
                                        </a>
                                    </div>
                                </OwlCarousel>
                              

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                                   style={{backgroundImage: 'url(./images/img_2.jpg)'}} >
                                    <div className="text">
                                        <div className="post-meta">
                                            <span className="category">Lifestyle</span>
                                            <span className="mr-2">March 15, 2018 </span> &bullet;
                                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                                   style={{backgroundImage: 'url(./images/img_3.jpg)'}}>
                                    <div className="text">
                                        <div className="post-meta">
                                            <span className="category">Travel</span>
                                            <span className="mr-2">March 15, 2018 </span> &bullet;
                                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                                   style={{backgroundImage: 'url(./images/img_4.jpg)' }}>
                                    <div className="text">
                                        <div className="post-meta">
                                            <span className="category">Food</span>
                                            <span className="mr-2">March 15, 2018 </span> &bullet;
                                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>


                </section>
               
                <section className="site-section py-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="mb-4">Lifestyle Category</h2>
                            </div>
                        </div>
                        <div className="row blog-entries">
                            <div className="col-md-12 col-lg-8 main-content">
                                <div className="row">
                              
                                                    {this.state.blogsPager.map((item,index) => (

                                    <div key={index} className="col-md-6">
                                        <ScrollAnimation animateIn="fadeIn">

                                        <Link to={"/Blog-Single?id="+item.nid} className="blog-entry"
                                           data-animate-effect="fadeIn">
                                            <img src={item.image} alt="Image placeholder" style={{width: "100%" , height: "250px"}}/>
                                                <div className="blog-content-body">
                                                    <div className="post-meta">
                                                        <span className="category">{this.state.type[item.typenameid]}</span>
                                                        <span className="mr-2">{item.date} </span> 
                                                        <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                                    </div>
                                                    <h2>{item.title}</h2>
                                                </div>
                                        </Link>
                                        </ScrollAnimation>
                                    </div>
            ))}

                               
                                
                            </div>

                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <nav aria-label="Page navigation" className="text-center">
                                            <ul className="pagination">
                                               
                                                <li className="page-item "><a className="page-link" onClick={()=>this.prevClick()}>Prev</a></li>
                {ArrayOfPage.map((item, index) => (
                 <li key={index} className={"page-item pagerclass pagerclass"+item}><a className="page-link" onClick={()=>this.pageChange({index})}>{item}</a></li>
                                     

))}

                                               
                                                <li className="page-item"><a className="page-link" onClick={()=>this.nextClick()}>Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>




                            </div>

<Sidebar/>
                        </div>
                    </div>
                </section>
                <Footer/>

                <div id="loader" className="fullscreen">
                    <svg className="circular" width="48px" height="48px">
                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4"
                                stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4"
                                strokeMiterlimit="10" stroke="#f4b214"/>
                    </svg>
                </div>

            </div>
        );
    }
   
}


export default index;
