import Accordion from "react-bootstrap/Accordion";

const FAQ = (props) => {
  return (
    <div
      className="row"
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
      }}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <Accordion>
          <h2 style={{ color: "#0d6efd" }}>FAQ</h2>
          <br />
          <Accordion.Item eventKey="0">
            <Accordion.Header>{props.ques1}</Accordion.Header>
            <Accordion.Body>{props.ans1}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{props.ques2}</Accordion.Header>
            <Accordion.Body>{props.ans2}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>{props.ques3}</Accordion.Header>
            <Accordion.Body>{props.ans3}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
export default FAQ;
