import classes from "./MeetupDetail.module.css";

function MeetupDetail(props: any) {
  const { image, title, address, description } = props;

  return (
    <section className={classes.detail}>
      <img src={image} alt={title}></img>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
