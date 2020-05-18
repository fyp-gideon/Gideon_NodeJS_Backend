const { Event, validate } = require("../models/event");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const events = await Event.find()
    //.select("-__v")
    //.sort("");
  
  if (req.query.fetchUpdated == 'true')
    console.log(req.query.fetchUpdated);  
  else{
    console.log(events);
    res.send(events);
  }
  
});

router.post("/", async (req, res) => {
//router.post("/", [auth], async (req, res) => {
  console.log(req.body)
  //const { error } = validate(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  const event = new Event({ 
    event_label: req.body.event_label,
    event_serial: req.body.event_serial,
    date_time: req.body.date_time,
    normal_probability: req.body.normal_probability,
    abnormal_probability: req.body.abnormal_probability,
    image_url: req.body.image_url,
    clip_url: req.body.clip_url
});
  await event.save();

  res.send(event);
});

router.get("/:event_serial", async (req, res) => {
  if (req.query.fetchUpdated === 'true'){
    const event = await Event.find({ event_serial: {$gt: req.params.event_serial }});//.select("-__v");
    console.log('Query String: ', req.query);
    console.log('Query String: ', event);
    return res.send(event);
  }
  
  const event = await Event.find({ event_serial: req.params.event_serial });//.select("-__v");
  
  if (event[0] === undefined)
    return res.status(404).send("The event with the given ID was not found.");

  console.log(event);
  res.send(event);
  
  console.log('Request Params: ', req.params.event_serial);
});

module.exports = router;
