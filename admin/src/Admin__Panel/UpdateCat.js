import React from "react";
import { useNavigate } from "react-router-dom";

function UpdateCat(props) {
  const navigate = useNavigate();
  const { handle, handler, updateCategory } = props;
  return (
    <div className="container">
      <div className="col-9 offset-3">
        <h2 className="text-center">Update Your Blog Post </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateCategory();
            navigate("/ManageCategory");
          }}
        >
          <label className="mt-5">Edit Category</label>
          <input
            value={handle.category}
            onChange={handler}
            required
            name="category"
            type="text"
            className="form-control"
          />

          <label className="mt-5">Edit Title</label>
          <input
            value={handle.title}
            onChange={handler}
            required
            name="title"
            type="text"
            className="form-control"
          />

          <label className="mt-5">Edit Content</label>
          <input
            value={handle.content}
            onChange={handler}
            required
            name="content"
            type="text"
            className="form-control"
          />

          <button className="btn btn-primary mt-3">Update Blog</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateCat;
