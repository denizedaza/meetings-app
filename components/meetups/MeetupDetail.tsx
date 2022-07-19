function MeetupDetail(props: any) {
  const { image, title, address, description } = props;

  return (
    <>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </>
  );
}

export default MeetupDetail;
