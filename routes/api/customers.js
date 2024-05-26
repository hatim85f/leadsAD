const express = require("express");
const Customer = require("../../models/Customer");
const router = express.Router();
const moment = require("moment");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();

    return res.status(200).json({ customers });
  } catch (error) {
    return res.status(500).send({
      error: "Error !",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    phone,
    email,
    channel,
    status,
    progression,
    agreement,
    followUp,
    recall,
    callAgain,
    requesting,
    offerPrefered,
    appointmentCreated,
    appointmentDate,
    appointmentTime,
    createdBy,
  } = req.body;

  try {
    // transfer date string to iso date
    const changeDate = (date) => {
      if (date) {
        return moment(date, "DD/MM/YYYY").toISOString();
      }
    };

    const newCustomer = new Customer({
      name,
      phone,
      email,
      channel,
      status,
      progression,
      agreement,
      followUp: followUp ? changeDate(followUp) : null,
      recall: recall ? changeDate(recall) : null,
      callAgain,
      requesting,
      offerPrefered,
      appointmentCreated,
      appointmentDate: appointmentDate ? changeDate(appointmentDate) : null,
      appointmentTime: appointmentTime
        ? moment(appointmentTime, "HH:mm").toISOString()
        : null,
      createdBy,
    });

    await Customer.insertMany(newCustomer);

    return res.status(200).send({
      message: "Customer created successfully !",
      customer: newCustomer,
    });
  } catch (error) {
    return res.status(500).send({
      error: "Error !",
      message: error.message,
    });
  }
});

router.put("/appointment/:id", async (req, res) => {
  const { appointmentCreate } = req.body;

  try {
  } catch (error) {
    return res.status(500).send({
      error: "Error !",
      message: error.message,
    });
  }
});

module.exports = router;
