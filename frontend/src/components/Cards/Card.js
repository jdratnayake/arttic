import './Card.css';

function Card( props ) {
  return (
    
      <div className="col">
        <div className="card trending-card">
          <img src={ props.img } className="card-img-top card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
          </div>
        </div>
      </div>

  );
}

export default Card;
