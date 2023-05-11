import React from 'react'
import "./HomeBlog.css";
import { Link } from 'react-router-dom';
function HomeBlog() {
  return (
    <div>
    <h2 className='titlehomeblog'>Our Latest Blogs</h2>
    <div className='container'>
    <div className='row'>
              <div className="  col-lg-4  col-md-6 col-sm-12  mb-4">
            <div class="card">
              <img class="card-img-top" src="banner.jpg" alt="cap" />
              <div class="card-body">
                <p class="card-title cat">Web Development</p>
                <p class="card-text text-dark">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" class="btn btn-info">
                  Read Complete
                </Link>
              </div>
            </div>
          </div>
          <div className="  col-lg-4  col-md-6 col-sm-12  mb-4">
            <div class="card">
              <img class="card-img-top" src="banner.jpg" alt="cap" />
              <div class="card-body">
                <p class="card-title cat">Social Media Marketing </p>
                <p class="card-text text-dark">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" class="btn btn-info">
                  Read Complete
                </Link>
                
              </div>
            </div>
          </div>
          <div className="  col-lg-4  col-md-6 col-sm-12  mb-4">
            <div class="card" >
              <img class="card-img-top" src="banner.jpg" alt="cap" />
              <div class="card-body">
                <p class="card-title cat">Graphic Design</p>
                <p class="card-text text-dark">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" class="btn btn-info">
                  Read Complete
                </Link>
                
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default HomeBlog