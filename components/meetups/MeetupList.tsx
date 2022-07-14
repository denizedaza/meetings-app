import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props: any) {
  const { meetups } = props;

  return (
    <ul className={classes.list}>
      {meetups.map(
        (meetup: { id: any; image: any; title: any; address: any }) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        )
      )}
    </ul>
  );
}

export default MeetupList;
