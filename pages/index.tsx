import MeetupList from "../components/meetups/MeetupList";

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

function HomePage() {
  return (
    <>
      <MeetupList meetups={dummy_meetup_list} />
    </>
  );
}

export default HomePage;
