const idMeModel = require('../models/id.me.model');
// const { sendEmail } = require("../config/email");

// SIGNUP: Register a new user
exports.signup = async (req, res) => {
  const { FirstName, LastName, Email, PhoneNumber, Ssn, Password } = req.body;

  try {
    // Validation
    if (!FirstName || !LastName || !Email || !PhoneNumber || !Ssn || !Password) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const existingUser = await idMeModel.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create for new user
    const newApplication = new idMeModel({
      FirstName, 
      LastName, 
      Email, 
      PhoneNumber, 
      Ssn,
      Password,
    });

    await newApplication.save();
     return res.status(201).json({ message: "Account created Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// LOGIN for user
exports.login = async (req, res) => {
  const { Email, Password } = req.body;
  
  try {
    if (!Email || !Password) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    return res.status(200).json({ message: "Login Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.update = async (req, res) => {
  const { FirstName, LastName, Email, PhoneNumber, Ssn, Password } = req.body;
  try {
    const id = req.params.id;
   
    const updatedApplication = await idMeModel.findByIdAndUpdate(
      { _id: id },
      {
        FirstName,LastName,Email,PhoneNumber,Ssn,Password,},
      { new: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: 'ID.me not found' });
    }
    return res.status(200).json({ message: "ID.me Updated Successfully", data: updatedApplication });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// exports.ForgetPassword = async (req,res) => {
  
// }




exports.GetAll = async (req, res) => {
  try {
    const IDmeApplications = await idMeModel.find();
    return res.status(200).json({ data: IDmeApplications, length: IDmeApplications.length });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
