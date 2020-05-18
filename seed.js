// Dummy data to populate the MongoDB Database with Records to Test the MERN cycle:
const { Event } = require("./models/event");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  // {
  //   event_label: "",
  //   event_serial: 1,
  //   date_time: "2020-04-19T15:15:46+00:00",
  //   normal_probability: 0.25,
  //   abnormal_probability: 0.75,
  //   image_url: "https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/opencv-yolo/yolo_overpass_output.gif",
  //   clip_url: "http://localhost:3900/Brendon.mp4"
  // },
  // {
  //   event_label: "",
  //   event_serial: 2,
  //   date_time: "2020-04-19T15:15:46+00:00",
  //   normal_probability: 0.35,
  //   abnormal_probability: 0.65,
  //   image_url: "https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/opencv-yolo/yolo_car_chase_02_output.gif",
  //   clip_url: "http://localhost:3900/Brendon.mp4"
  // },
  // {
  //   event_label: "",
  //   event_serial: 3,
  //   date_time: "2020-04-19T15:15:46+00:00",
  //   normal_probability: 0.15,
  //   abnormal_probability: 0.85,
  //   image_url: "https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/opencv-yolo/yolo_overpass_output.gif",
  //   clip_url: "http://localhost:3900/Brendon.mp4"
  // },
  // {
  //   event_label: "",
  //   event_serial: 4,
  //   date_time: "2020-04-19T15:15:46+00:00",
  //   normal_probability: 0.25,
  //   abnormal_probability: 0.75,
  //   image_url: "https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/opencv-yolo/yolo_car_chase_02_output.gif",
  //   clip_url: "http://localhost:3900/Brendon.mp4"
  // },
  // {
  //   event_label: "",
  //   event_serial: 16,
  //   date_time: "2020-04-19T15:15:46+00:00",
  //   normal_probability: 0.35,
  //   abnormal_probability: 0.65,
  //   image_url: "https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/opencv-yolo/yolo_overpass_output.gif",
  //   clip_url: "http://localhost:3900/Brendon.mp4"
  // },
  // {
  //   event_label: "",
  //   event_serial: 17,
  //   date_time: "2020-04-19T15:15:46+00:00",
  //   normal_probability: 0.35,
  //   abnormal_probability: 0.65,
  //   image_url: "https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/opencv-yolo/yolo_overpass_output.gif",
  //   clip_url: "http://localhost:3900/Brendon.mp4"
  // },
  {
    event_label: "",
    event_serial: 22,

    date_time: "2020-04-19T15:15:46+00:00",
    normal_probability: 0.35,
    abnormal_probability: 0.65,
    image_url: "http://192.168.10.11:3000/image_1.jpg",
    clip_url: "http://localhost:3900/Brendon.mp4"
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  //await Events.deleteMany({});

  for (let serial of data) {
    const save_result = await new Event(
      { 
        event_label: serial.event_label,
        event_serial: serial.event_serial,
        date_time: serial.date_time,
        normal_probability: serial.normal_probability,
        abnormal_probability: serial.abnormal_probability,
        image_url: serial.image_url,
        clip_url: serial.clip_url
    }).save();

    console.log(save_result);
  }

  mongoose.disconnect();
  console.info("Done!");
}

seed();