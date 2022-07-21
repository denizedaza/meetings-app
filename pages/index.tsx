import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
require("dotenv").config();

function HomePage(props: any) {
  return (
    <>
      <Head>
        <title>Meetups Collection</title>
      </Head>
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
