// import React from 'react'
// import "./Dashboard.css"

// const Dashboard = () => {
  
//   return (
//     <div>
// <div className="container">
// <div className='  offset-1 col-11 mt-5'>
//   <div className="row">
 
//     <div className="col-4">
//       <div className="card-counter danger ">
//         <i className="fa fa-bookmark"/>
//         <span className="count-numbers">7</span>
//         <span className="count-name">Categories</span>
//       </div>
//     </div>
//     <div className="col-4">
//       <div className="card-counter success">
//         <i className="fa fa-file" />
//         <span className="count-numbers">20</span>
//         <span className="count-name">Blogs</span>
//       </div>
//     </div>
//     <div className="col-4">
//       <div className="card-counter info">
//         <i className="fa fa-users" />
//         <span className="count-numbers">30</span>
//         <span className="count-name">Users</span>
//       </div>
//     </div>
//   </div>
// </div>

// </div>
//     </div>
//   )
// }

// export default Dashboard





import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [categoryCount, setCategoryCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch category, blog, and user counts from the backend API
      const response = await fetch('http://localhost:8000/dashboard');
      const { categories, blogs, users } = await response.json();
      setCategoryCount(categories);
      setBlogCount(blogs);
      setUserCount(users);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="offset-1 col-11 mt-5">
          <div className="row">
            <div className="col-4">
              <div className="card-counter danger">
                <i className="fa fa-bookmark" />
                <span className="count-numbers">{categoryCount}</span>
                <span className="count-name">Categories</span>
              </div>
            </div>
            <div className="col-4">
              <div className="card-counter success">
                <i className="fa fa-file" />
                <span className="count-numbers">{blogCount}</span>
                <span className="count-name">Blogs</span>
              </div>
            </div>
            <div className="col-4">
              <div className="card-counter info">
                <i className="fa fa-users" />
                <span className="count-numbers">{userCount}</span>
                <span className="count-name">Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
