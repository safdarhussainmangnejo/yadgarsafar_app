const AgenciesCard = (props) => {
  return (
    <>
      <div className="card agency_card" data-aos="zoom-in-up">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                src={props.icon}
                style={{ height: "45px", width: "35px", paddingBottom: "10px" }}
              />
            </div>
            <div className="col-10">
              <h4 className="card-title">{props.title}</h4>
            </div>
          </div>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default AgenciesCard;
