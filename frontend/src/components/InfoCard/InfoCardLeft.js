import "./InfoCard.css";

import cardImage1 from "../../images/NFTs/monkey-removebg.png";

function InfoCardLeft(props) {
  return (
    <div classNameName="container-fluid card-info">
      <div className="card card-info">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={cardImage1}
              className="img-fluid rounded card-info-image card-image card-image-end"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body card-info-body">
              <h5 className="card-title card-info-title"> {props.title} </h5>
              <p className="card-text">{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardLeft;
