import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ManageCategory({ editCategory }) {
  const empty = {
    category: "",
    title:"",
    content:"",
  };

  //fetch category from DB
  const [category1, setData] = useState([]);
  const category = async () => {
    let value = await fetch("http://localhost:8000/benative");
    value = await value.json();
    console.log(value);
    setData(value);
  };

  // Call fetchApi function only once after the component is mounted
  useEffect(() => {
    category();
  }, []);
  //fetch category from DB END

  //post category into DB
  const [handle, setHandle] = useState(empty);
  const categoryHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const createCategory = async (e) => {
    e.preventDefault();
    console.log("click");
    try {
      if (handle.category === ""||handle.title === ""||handle.content === "") {
        alert("Please Enter All Fields First");
      } else {
        // Check if category already exists
        const existingCategory = category1.find(
          (item) => item.category.toLowerCase() === handle.category.toLowerCase()
        );
        if (existingCategory) {
          alert("Category Already Exists");
        } else {
          let record = await fetch("http://localhost:8000/benative", {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify(handle),
          });
          record = await record.json();
          alert("Category Created Successfully");
          // Refresh the category list
          category();
        }
      }
    } catch (error) {
      console.log("error message");
    }
  };
  
  //post category into DB  CODE END

  //Delete Category code start
  const delcategory = async (id) => {
    // Display confirmation pop-up window
    if (window.confirm("Are you sure  to delete Category?")) {
      let delcategory = await fetch(`http://localhost:8000/benative/${id}`, {
        method: "DELETE",
      });
      delcategory = await delcategory.json();
      category();
    }
  };
  //Delete Category code end

  return (
    <div>
      <div className="container ">
        <div className="col-9 offset-3">
          <h3 style={{ color: "#095669" }} className="text-center mt-3">
            Manage Blog Posting
          </h3>
          <div className="row">
            <div className="col-3">
              <h5 className="text-center mt-3" style={{ color: "#FA8072" }}>
                Add Blog Details
              </h5>
              <form className="mt-5">
              <label>Enter Category Name</label>
                <input
                  type="text"
                  placeholder="Enter Category Name"
                  className="form-control"
                  name="category"
                  onChange={categoryHandler}
                />
                       <label>Enter Title Name</label>
                <input
                  type="text"
                  placeholder="Enter Title Name"
                  className="form-control"
                  name="title"
                  onChange={categoryHandler}
                />
                       <label>Enter Content Details</label>
                <textarea
                  type="text"
                  placeholder="Enter Blog Content"
                  className="form-control"
                  style={{ minHeight: "150px" }}
                  name="content"
                  onChange={categoryHandler}

                />
                <button
                  className="btn btn-info mt-3 btn-block"
                  onClick={createCategory}
                >
                  Add Blog
                </button>
              </form>
            </div>
            <div className="col-8">
              <h5 className="text-center mt-3" style={{ color: "#FA8072" }}>
                Manage Blog Details
              </h5>
              <table className="table table-bordered mt-5 ">
                <tbody>
                  <tr className="bg-info">
                    <th>No. </th>
                    <th>Category Name</th>
                    <th>Title Name</th>
                    <th>Content</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  {
                    category1.map((item, index) => (
                    <tr key={index} className="bg-ligth">
                      <td>{index + 1}</td>
                      <td>{item.category}</td>
                      <td>{item.title}</td>
                      {/* <td className="height:'200px', width:'200px' ">{item.content}</td> */}
                      <td style={{ height: '150px', width: '200px', overflow: 'auto', display: 'block' }}>
  {item.content}
</td>


                      <td>
                        {" "}
                        <Link to={`/UpdateCat/${item._id}`}>
                          <button
                            className="btn btn-info"
                            onClick={() => editCategory(item._id)}
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => delcategory(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCategory;
