const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./model");
const CatModel= require("./Catmodel")
//for signup
// const UserDetail = require("./Authmodel");
const Authmodel = require("./Authmodel");
//for sign up end

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 8000;
app.listen(port, () => {
  console.log("port is connected successfully at " + port);
});
app.use(cors());
//for connection db
mongoose.connect("mongodb://127.0.0.1:27017/Benative", {
  useNewUrlParser: true,
});
//for checking the db
mongoose.connection.once("open", () => {
  console.log("Database connected ");
});

app.get("/benative", async (req, res) => {
  try {
    const data = await CatModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});


// //for creating the Blog
app.post("/benative", (req, res) => {
  const category = CatModel(req.body);
  category
    .save()
    .then((used) => {
      res.status(200).send(used);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

//for getting the Blog from db
app.get("/benative", async (req, res) => {
  try {
    const category = await CatModel.find();
    res.status(200).send(category);
  } catch {
    res.status(500).send("failed to fetch the api");
  }
});
//for getting the Blog from db by id
app.get("/benative/:id", async (req, res) => {
  try {
    const User = await CatModel.findById(req.params.id);
    res.json(User);
  } catch (error) {
    res.send(error);
  }
});

//for DELETE the Blog from db by id
app.delete("/benative/:id", async (req, res) => {
  try {
    const category = await CatModel.findByIdAndDelete(req.params.id);
    res.status(200).send(category);
  } catch {
    res.status(500).send("failed to fetch the api");
  }
});

//for Update the Blog from db by id
app.put("/benative/:id", async (req, res) => {
  const category = await CatModel.findByIdAndUpdate(req.params.id);
  if (!category) {
    return res.status(404).send("Category not found");
  } else {
    category.category = req.body.category;
    category.title = req.body.title;
    category.content = req.body.content;

    category.save();
  }
  try {
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send("failed to fetch the data");
  }
}

);

//for new sign up practice

app.post("/signup", async (req, res) => {
  const UserDetail = await Authmodel(req.body);
  try {
    const userexist = await Authmodel.findOne({
      email: req.body.email,
    });
    if (userexist) {
      res.json("Email Already Exist");
    } else {
      UserDetail.save();
      res.json("User Created Successfully");
    }
  } catch (error) {
    console.log("error while fetching the data");
  }
});


//login
app.post("/login", async (req, res) => {
  // const UserDetail = await Authmodel(req.body);
  const LoginUser = await Authmodel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (LoginUser) {
    res.json({ message: "Login Successfully", LoginUser: LoginUser });
  } else {
    res.json("email or password not correct");
  }
});






//Contact Page


// //for creating the contact
app.post("/Contact", (req, res) => {
  const contact = ContactModel(req.body);
  contact
    .save()
    .then((used) => {
      res.status(200).send(used);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});     

//for getting the Contact from db
app.get("/Contact", async (req, res) => {
  try {
    const contact = await ContactModel.find();
    res.status(200).send(contact);
  } catch {
    res.status(500).send("failed to fetch the api");
  }
});
//for getting the Contact from db by id
app.get("/Contact/:id", async (req, res) => {
  try {
    const User = await ContactModel.findById(req.params.id);
    res.json(User);
  } catch (error) {
    res.send(error);
  }
});

//for DELETE the Contact from db by id
app.delete("/Contact/:id", async (req, res) => {
  try {
    const contact = await ContactModel.findByIdAndDelete(req.params.id);
    res.status(200).send(contact);
  } catch {
    res.status(500).send("failed to fetch the api");
  }
});

//for Update the Contact from db by id
app.put("/Contact/:id", async (req, res) => {
  const contact = await ContactModel.findByIdAndUpdate(req.params.id);
  if (!contact) {
    return res.status(404).send("Contact not found");
  } else {
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.subject = req.body.subject;
    contact.message = req.body.message;

    contact.save();
  }
  try {
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send("failed to fetch the contact");
  }
}

);