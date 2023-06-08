const UserModel = require("../models/companySchema");
const AgencyModel = require("../models/agencyRegisterSchema");
const signupSchema = require('../models/signupSchema');

//get all tourists
exports.getTourists = async (req, res) => {
  try {
    const result = await signupSchema.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: "please try again later" });
  }
};

exports.getTotalNumberOfPaidOrders = async (req, res) => {
  try {
    const result = await signupSchema.find({});
    let totalNumberOfPaidOrders=0;
    result.forEach((user)=>{
      user.bookedPackages.forEach((order)=>{
        if(order.paymentStatus=="Paid"){
          totalNumberOfPaidOrders=totalNumberOfPaidOrders+1;
        }
      })
    })
    res.json({
      totalNumberOfPaidOrders:totalNumberOfPaidOrders
    });
  } catch (err) {
    res.status(500).json({ err: "please try again later" });
  }
};

exports.getTotalNumberOfOrdersPending = async (req, res) => {
  const email = req.params.userLocalEmail;
  try {
    const result = await signupSchema.find({email});
    let ordersPending=0;
    result.forEach((user)=>{
      user.bookedPackages.forEach((order)=>{
        if(order.paymentStatus=="Pending" || order.paymentStatus=="Unpaid"){
          ordersPending=ordersPending+1;
        }
      })
    })
    res.json({
      ordersPending:ordersPending
    });
  } catch (err) {
    res.status(500).json({ err: "please try again later" });
  }
};

// find total number of paid/completed packages of agency
exports.getTotalNumberOfAgencyPaidOrders = async (req, res) => {
  const companyEmail = req.params.userLocalEmail;
  try {
    const result = await signupSchema.find({'bookedPackages.companyEmail':companyEmail});
    let totalNumberOfPaidOrders=0;
    result.forEach((user)=>{
      user.bookedPackages.forEach((order)=>{
        if(order.companyEmail === companyEmail && order.paymentStatus=="Paid"){
          totalNumberOfPaidOrders=totalNumberOfPaidOrders+1;
        }
      })
    })
    res.json({
      totalNumberOfPaidOrders:totalNumberOfPaidOrders
    });
  } catch (err) {
    res.status(500).json({ err: "please try again later" });
  }
};

// search tourist by email
exports.searchTouristbyEmail = async (req, res) => {
  try {
    const email = req.params.userLocalEmail;
    const agency = await signupSchema.findOne({ email });
    res.json(agency);
  } catch (err) {
    console.log(err, "agencyController.searchAgencybyId error");
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};


// get number of active clients

exports.getTotalNumberOfActiveClients = async (req, res) => {
  const companyEmail = req.params.userLocalEmail;
  try {
    
    const response = await signupSchema.distinct('email', { 'bookedPackages.companyEmail':companyEmail });
    
    console.log("totalNumberOfActiveClients: ", response, "and length ",response.length)
    res.json({
      totalNumberOfActiveClients:response.length
    });
  } catch (err) {
    res.status(500).json({ err: "please try again later" });
  }
};

//
exports.getActiveClients = async (req, res) => {
  const companyEmail = req.params.userLocalEmail;
  try {
    
      		const products = await signupSchema.find({})
      			.populate('bookedPackages.companyEmail')
      			.limit(6);
      
      		res.json({ products });
      	} catch (err) {
      		console.log(err, 'productController.readAll error');
      		res.status(500).json({
      			errorMessage: 'Please try again later',
      		});
        }
  //   const result = await signupSchema.find( {'bookedPackages.companyEmail': companyEmail});
  //   console.log("Result of Active USers: ", result, " & Length is ",result.length);
  //   let clients;
  //   result.forEach((user)=>{
  //      const clients = await result.distinct( "email" );
  //      console.log("clients: ", clients)
  //     user.bookedPackages.forEach((order)=>{
  //       order.distinct( "companyEmail" )
  //     })
  //   })
  //   res.json({
  //     clients:result,
  //     number: result.length
      
  //   });
  //   console.log("clients of ", companyEmail, " ", clients, "legnth ", clients.length);
  // } catch (err) {
  //   res.status(500).json({ err: "please try again later" });
  // }
};


// get total revenue of agency

exports.getAgencyRevenue = async (req, res) => {
  const email = req.params.userLocalEmail;
  try {
    const result = await signupSchema.find();
    let totalRevenue=0;
    result.forEach((user)=>{
      user.bookedPackages.forEach((order)=>{
        if(order.companyEmail===email && order.paymentStatus=="Paid"){
          totalRevenue=totalRevenue+order.amountPaid;
        }
      })
    })
    res.json({
      totalRevenue:totalRevenue
    });
  } catch (err) {
    res.status(500).json({ err: "please try again later" });
  }
};
