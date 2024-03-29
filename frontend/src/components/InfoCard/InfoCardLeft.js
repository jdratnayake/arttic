import "./InfoCard.css";

import cardImage1 from "../../images/NFTs/NFT2.png";

function InfoCardLeft(props) {
  return (
    <div classNameName="container-fluid card-info">
      <div className="card card-info">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 col-sm-12 col-xs-12 align-self-center">
            <img
              src={cardImage1}
              className="img-fluid rounded  card-info-image card-info-image-left card-image card-image-end"
              alt="..."
            />
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12">
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
