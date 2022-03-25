import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './container.css'
// import {} from '../../Utilities/databsase.json';

const dataBase = [{
    "id": 1,
    "name": "Escalade ESV",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2723
  }, {
    "id": 2,
    "name": "Probe",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2790
  }, {
    "id": 3,
    "name": "C70",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2733
  }, {
    "id": 4,
    "name": "Tacoma",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2828
  }, {
    "id": 5,
    "name": "Montero",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2931
  }, {
    "id": 6,
    "name": "Topaz",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2578
  }, {
    "id": 7,
    "name": "V70",
    "image": "http://dummyimage.com/294x254.png/ff4444/ffffff",
    "price": 2507
  }, {
    "id": 8,
    "name": "Expedition EL",
    "image": "http://dummyimage.com/294x254.png/5fa2dd/ffffff",
    "price": 2746
  }, {
    "id": 9,
    "name": "Cirrus",
    "image": "http://dummyimage.com/294x254.png/cc0000/ffffff",
    "price": 2607
  }, {
    "id": 10,
    "name": "C8 Double 12 S",
    "image": "http://dummyimage.com/294x254.png/dddddd/000000",
    "price": 2920
  }, {
    "id": 11,
    "name": "Dakota Club",
    "image": "http://dummyimage.com/294x254.png/5fa2dd/ffffff",
    "price": 2777
  }, {
    "id": 12,
    "name": "Discovery Series II",
    "image": "http://dummyimage.com/294x254.png/cc0000/ffffff",
    "price": 2728
  }];

const Container = () => {
    // const [products, setProducts] = useState([]);
    //     useEffect( 
    //         fetch('https://fakestoreapi.com/products')
    //         .then(res=> res.json())
    //         .then(data=>setProducts(data))
    //     ,[]);
    return (
        <div className='container'>
            <div className='products'

                {
                    dataBase.map(product=> <Product img={product.image} name={product.name} price={product.price}></Product>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Container;