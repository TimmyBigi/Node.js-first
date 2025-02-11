const idMeModel = require('../models/id.me.model');


exports.apply = async (req, res) => {
  const { FirstName, LastName, Email, PhoneNumber, Ssn, Amount } = req.body;

  try {
    // Validate required fields
    if (!FirstName || !LastName || !Email || !PhoneNumber || !Ssn || !Amount) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Create a new application using the  IDme model
    const newApplication = new idMeModel({
      FirstName, 
      LastName, 
      Email, 
      PhoneNumber, 
      Ssn,
      Amount,
    });

    // Save the loan application to the database
    await newApplication.save();

    return res
      .status(201)
      .json({ message: "Loan Application Submitted Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.update = async (req, res) => {
    const { FirstName, LastName, Email, PhoneNumber, Ssn, Amount } = req.body;
    try{
        const id = req.params.id;
        const UpdateApplication =  await  idMeModel.findByIdAndUpdate({_id: id,},
            {
                FirstName,
                LastName,
                Email,
                PhoneNumber,
                Ssn,
                Amount,
              },
              {isNew: true,}    
        )

    if(!UpdateApplication){
        return res.
        status(404).json({message:'ID.me not found'});
    }
    return res
    .status(200)
    .json({ message: "ID.me Updated Successfully" });
    } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
    }
};

exports.GetAll = async (req,res) =>{
  try{
    const IDmeApplication = await IDme.find()
    return res
    .status(200).json({data: IDmeApplication, length: IDmeApplication.length});
  }  catch (error) {
    console.error(error);
    return res
    .status(500).json({ message: "server Error" });
  }
};