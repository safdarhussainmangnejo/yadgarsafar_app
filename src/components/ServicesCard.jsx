const ServicesCard = (props) => {
  return (
    <>
      <div className="card service_card">
        <div className="card-body">
          <img
            src={props.icon}
            style={{ height: "70px", width: "65px", paddingBottom: "10px" }}
          />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default ServicesCard;
