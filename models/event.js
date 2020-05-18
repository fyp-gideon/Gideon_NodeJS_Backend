const Joi = require('joi');
const mongoose = require('mongoose');

const Event = mongoose.model('Events', new mongoose.Schema({
  event_serial: {
    type: Number,
    required: true,
    trim: true, 
    minlength: 1,
    maxlength: 255
  },
  event_label: { 
    type: String,  
    required: false,
    min: 0,
    max: 255
  },
  date_time: { 
    type: String, 
    required: true
  },
  normal_probability: { 
    type: Number,
    required: true,
  },
  abnormal_probability: { 
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  clip_url: {
    type: String,
    required: true
  }
}));

function validateEvent(event) {
  const schema = {
    event_serial: Joi.number().required().min(1).max(255),
    event_label: Joi.string().min(0).max(255),
    date_time: Joi.string().required(),
    normal_probability: Joi.number().required(),
    abnormal_probability: Joi.number().required(),
    image_url: Joi.string().required(),
    clip_url: Joi.string().required()
  };

  return Joi.validate(event, schema);
}

exports.Event = Event; 
exports.validate = validateEvent;