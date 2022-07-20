import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
require("dotenv").config();

const dummy_meetup_list = [
  {
    id: 1,
    title: "Meetup 1 the First",
    image:
      "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/041/026/original/tokyo-tower-s1930351799.jpg?2022&d=750x400",
    address: "Around the block we hope",
    description: "the first meetup",
  },
  {
    id: 2,
    title: "Meetup 2 the Second",
    image:
      "https://www.tourist-destinations.com/wp-content/uploads/2014/07/109042193.jpg",
    address: "Next to the convenience store",
    description: "the second meetup",
  },
];

function HomePage(props: any) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}
console.log(process.env.MONGO_USER, process.env.MONGO_PW);

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.9ej37.mongodb.net/meetupsapp?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 36000,
  };
}

export default HomePage;
