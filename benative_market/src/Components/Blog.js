import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  //fetch category from DB
  const [category1, setData] = useState([]);
  const category = async () => {
    let value = await fetch("http://localhost:8000/benative");
    value = await value.json();
    console.log(value);
    setData(value);
  };


  useEffect(() => {
    category();
  }, []);
  return (
    <div>
      <h3 className="blogs"> Our Blogs </h3>
      <h4 className="blogtagline">
        "Inspire your mind and ignite your curiosity with our captivating blog."
      </h4>
      <div className="container mt-5 mb-5 ">
        <div className="row">
          {
            category1.map((item) => (
            <div className="  col-lg-4  col-md-6 col-sm-12  mb-4">
              <div class="card">
                <img class="card-img-top" src="banner.jpg" alt="cap" />
                <div class="card-body">
                  <h2 class="card-title cat">{item.category}</h2>
                  <h4> {item.title}</h4>
                  <p class="card-text text-dark">{item.content}</p>
                  <Link to="#" class="btn btn-primary">
                    Read Complete
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4  col-md-6 col-sm-12 pagi">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  4
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  5
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  6
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  {" "}
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Blog;
