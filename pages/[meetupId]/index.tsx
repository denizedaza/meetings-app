import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.audleytravel.com/700/499/79/15982680-busan-port.jpg"
      title="Meetup Details"
      address="The address of the Meetup"
      description="First meetup!"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context: any) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://cdn.audleytravel.com/700/499/79/15982680-busan-port.jpg",
        id: "1",
        title: "Meetup Details",
        description: "First meetup!",
      },
    },
  };
}

export default MeetupDetails;
