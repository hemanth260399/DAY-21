import App from './App.jsx'
import data from './product.json'
import "./index.css"
import { useState } from 'react'

const Mainapp = () => {
    let [add, toadd] = useState([]);
    let carincre = (value) => {
        let temp = [...add, value]
        toadd(temp)
    }
    let cardecre = (value) => {
        let temp = add.filter(c => c !== value)
        toadd(temp)
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "10px 0px 10px 60px" }}>
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" style={{ marginLeft: "10px" }}>Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">ALL PRODUCT</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">POPULAR ITEMS</a>
                                    <a className="dropdown-item" href="#">New Arrivals</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-dark my-2 my-sm-0" style={{ marginRight: "150px" }} type="submit"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                                <span>  {add.length}</span> </button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="jumbotron jumbotron-fluid black_box" >
                <div className="container">
                    <p className="display-4" style={{ fontWeight: "bolder" }}>Shop in style</p>
                    <p className="lead" style={{ color: "grey" }}>With this shop homepage template</p>
                </div>
            </div>
            <div>
                {data.map((productdata) => (

                    <App
                        key={productdata.No}
                        pno={productdata.No}
                        salelive={productdata.salelive}
                        name={productdata.name}
                        rating={productdata.rating}
                        price={productdata.price}
                        cartbutton={productdata.cartbutton}
                        cartincrease={carincre}
                        cartdecrease={cardecre}
                        available={Boolean(add.find(f => f == productdata.No))}
                    />
                ))}
            </div>
            <div className="alert alert-success footer">
                <h4 className="alert-heading">Copyright © Your Website 2023</h4>
            </div>
        </>
    )
}


export default Mainapp;