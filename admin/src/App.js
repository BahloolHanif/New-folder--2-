import Login from "./Admin__Panel/Login";
import ManageBlog from "./Admin__Panel/ManageBlog";
import ManageCategory from "./Admin__Panel/ManageCategory";
import Reports from "./Admin__Panel/Reports";
import Dashboard from "./Admin__Panel/Dashboard";
import Sidebar from "./Admin__Panel/Sidebar";
import Signup from "./Admin__Panel/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateCat from "./Admin__Panel/UpdateCat";
import { useState } from "react";

const App2 = () => {
  //state for editing the data
  const [Getid, SetGetid] = useState();
  const empty = {
    category: "",
    title: "",
    content: "",
  };
  //state for handling input
  const [handle, setHandle] = useState(empty);

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  // function for editing the Category
  const editCategory = async (id) => {
    var data = await fetch(`http://localhost:8000/benative/${id}`);
    data = await data.json();
    console.log(data);
    setHandle(data);
    SetGetid(id);
  };
  // function for updating the Api
  const updateCategory = () => {
    fetch(`http://localhost:8000/benative/${Getid}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
  };
  return (
    <>
      <Sidebar />
      <Routes>
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/ManageBlog" element={<ManageBlog />} />
        <Route
          path="/ManageCategory"
          element={<ManageCategory editCategory={editCategory} />}
        />

        <Route path="/Reports" element={<Reports />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
          path="/UpdateCat/:id"
          element={
            <UpdateCat
              editCategory={editCategory}
              updateCategory={updateCategory}
              handle={handle}
              handler={handler}
              Getid={Getid}
            />
          }
        />
      </Routes>
    </>
  );
};
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
export { App2 };
