import "./InfoCard.css";

import cardImage1 from "../../images/NFTs/monkey-removebg.png";

function InfoCardRight(props) {
  return (
    <div classNameName="container-fluid card-info">
      <div className="card mb-3">
        <div className="row g-0">
          
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {props.title} </h5>
              <p className="card-text">{props.body}</p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={cardImage1}
              className="img-fluid rounded-start card-image-end"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardRight;
