import Iframe from "react-iframe";
function Map() {
  return (
    <div className="text-bg-danger mt-4 p-5 mb-4  rounded-3 d-flex flex-column justify-content-center align-items-center  ">
      <h1>This is our Location </h1>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.282438464757!2d10.23629217609868!3d36.83571127223702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3541c4f22e55%3A0x5b7225d7fdbb3801!2sGOMYCODE%20LAC1!5e0!3m2!1sfr!2stn!4v1699529182996!5m2!1sfr!2stn"
        width="640px"
        height="450px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
}

export default Map;
