/*
*Contributor: Tiến 19th August 2020
*Function: Screen 02: Main (render overview home screen)

*/

import React from 'react';
import './styles/ExplorePageStyle.css';

// import {Button} from '@material-ui/core';

const ExplorePage = props => {
  return(
    <div className="page">
      <div className="view-header">
            {/* <img
                className="icon-hamburger"
                alt='Hamburger icon'
                src={require('../../../assets/images/hamburger.png')}
            /> */}
            
            <a  className="my-header">Social Ject</a>
            
            {/*Search bar */}
            <input
              className="search-input"
              type="text"
              placeholder="Tìm Kiếm dự án..." 
            ></input>
            
            <div className="container-search">
            <img
              className="icon-search"
              alt= 'Search icon'
              src={require('../../../assets/images/search2.png')}
            />
            </div>
          {/*avatar icon*/}
          <div className="container-avatar" >
              <img
                className="avatar"
                alt="Avatar"
                src={require('../../../assets/images/T.png')}
                />
              <div> 
                  <p className="name"> Trần Ngọc Tiến</p> 
              </div>
              
          </div>
       
       </div>     
          

        
          
         
    <div>

      <p className="my-text">Explore Projects</p>

    </div>

    {/* exlpore projects */}
    
        <div className="container-explore">
      
            <div className="project-card-1">
                  <img
                    alt="Projects"
                    className="projects-image-1"
                    src={require("../../../assets/images/T.jpg")} 
                  />
          
                  <p className="projects-type-1">Âm nhạc</p>
                  <p className="projects-type-1">1789 người theo dõi </p>
              
            </div> 
            
            <div className="project-card">
                  <img
                    alt="Projects"
                    className="projects-image"
                    src={require("../../../assets/images/Ken.jpg")} 
                  />
            
                  <p className="projects-type">Du Lịch </p>
                  <p className="projects-type">700 người theo dõi </p>
            
            </div>   

            <div className="project-card">    
                        <img
                          alt="Projects"
                          className="projects-image"
                          src={require("../../../assets/images/long.JPG")} 
                        />
                  
                          <p className="projects-type">Hội họa </p>
                          <p className="projects-type">3000 người theo dõi </p>
                    
            </div>   
            
            <div className="project-card">
                    <img
                      alt="Projects"
                      className="projects-image"
                      src={require("../../../assets/images/4.jpg")} 
                    />
                  
              
                    <p className="projects-type">Thể Thao </p>
                    <p className="projects-type">200 người theo dõi </p>
              
            </div>      
            
            <div className="project-card">
                    <img
                      alt="Projects"
                      className="projects-image"
                      src={require("../../../assets/images/5.jpg")} 
                    />
                
                  
                
                    <p className="projects-type">Xã hội </p>
                    <p className="projects-type">900 người theo dõi </p>
              
            </div>      
            
            <div className="project-card">
                    <img
                      alt="Projects"
                      className="projects-image"
                      src={require("../../../assets/images/hi.jpg")} 
                    />
                
                      <p className="projects-type">Tình nguyện </p>
                      <p className="projects-type">360 người theo dõi </p>
              
            </div>
            
            <div className="project-card">
                      <img
                        alt="Projects"
                        className="projects-image"
                        src={require("../../../assets/images/T2.jpg")} 
                      />
                
                        <p className="projects-type">Cảm hứng </p>
                        <p className="projects-type">350 người theo dõi </p>
                  
            </div>

          

            

        
      </div>


      {/* Featured 1 */}

      <div>

          <p className="my-text">Featured</p>

      </div>

      <div className="container">
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/7.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/2.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/3.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/4.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/5.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/6.jpg")} 
          />
           <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/7.jpg")} 
          />
           <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/7.jpg")} 
          />
        
    </div>

    {/*Featured 2 */}

    <div>

        <p className="my-text">Featured</p>

    </div>

    <div className="container">
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/1.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/7.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/2.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/4.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/5.jpg")} 
          />

    </div>

      {/*Featured 3 */}

    <div>

        <p className="my-text">Featured</p>

    </div>
    
    <div className="container">
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/5.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/3.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/7.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/8.jpg")} 
          />
          <img
            alt="Projects"
            className="picture-projects"
            src={require("../../../assets/images/1.jpg")} 
          />
          
      </div>
      
      <div className="footer">
              <p className="text-1">Copyright...</p>
              <p className="text-2">Social Media Icons</p>
      </div>

    
    </div>
  )
}

export default ExplorePage;