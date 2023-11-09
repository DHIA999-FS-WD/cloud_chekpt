import "./about.css";

function About() {
  return (
    <d>
      <div className="p-5 mb-4  rounded-3 text-bg-primary mt-4 ">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Read About Us</h1>
          <p className="col-md-8 fs-4">
            This is just an example
            <br />
            to add <strong className="text-warning">Google Map </strong> in our
            web page
            <br />I used {""}
            <strong className="text-warning">react-Bootstrap </strong>&{" "}
            <strong className="text-warning">Bootstrap </strong>& and I import
            the Google Map as
            <span className="text-warning">
              <strong> ifram </strong>
            </span>
            And i use for that
            <span className="text-warning">
              <strong> react-iframe </strong>
            </span>
            <br />
            Google Cloud need creadit Card and I {"don't"} have it
          </p>
          <button className="btn btn-dark btn-lg" type="button">
            Contact US
          </button>
        </div>
      </div>
    </d>
  );
}

export default About;
