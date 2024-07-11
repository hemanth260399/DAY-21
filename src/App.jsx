
import PropTypes from "prop-types";
import "./App.css";

function App({ salelive, name, rating, price, pno, cartincrease, cartdecrease, available = false }) {

  return (
    <>
      <div className="card-deck" style={{ width: "18rem", display: "inline-block", margin: "40px 10px 50px 60px", textAlign: "center" }}>
        <div className="card" style={{ height: "380px", position: "relative" }}>
          <img src="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19722.jpg" className="card-img-top" alt="..." />
          {salelive ? (<h5 className="card-title card_tag" >sale</h5>) :
            <></>}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {rating ? (<h6 style={{ color: "gold" }}><i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i></h6>) : <p></p>}
            {price.pricechange ? (
              <span style={{ textDecoration: "line-through" }}>{price.oldprice}</span>
            ) : (
              <h6></h6>
            )} <span>  {price.newprice}</span>
          </div>
          {available ? (<button type="button" className="btn btn-outline-dark m-4" onClick={() => cartdecrease(pno)}>Remove from Cart</button>)
            :
            (<button type="button" className="btn btn-outline-dark m-4" onClick={() => cartincrease(pno)}>Add to Cart</button>)}
        </div>
      </div>
    </>
  )
}
App.propTypes = {
  salelive: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.bool,
  price: PropTypes.shape({
    oldprice: PropTypes.string,
    pricechange: PropTypes.bool,
    newprice: PropTypes.string
  }),
  cartbutton: PropTypes.string,
  cartincrease: PropTypes.func,
  cartdecrease: PropTypes.func,
  available: PropTypes.bool,
  pno: PropTypes.string
}

export default App
