import React, { useEffect, useState } from 'react'
import NavBar from './navbar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'





function Products() {
    const [products,setProducts] = useState([])

    useEffect(() =>{
        axios.get('https://ewasteapi.onrender.com/products')
        .then(products => setProducts(products.data))
        .catch(error => console.error(error))
    },[])

  return (
    <>
    <NavBar/>
    <div className='tcontainer'>
        <ul className='responsive-table'>
            <li className="table-header">
                <div className="col col-1">Owner Name</div>
                <div className="col col-2">Phone</div>
                <div className="col col-3">Address</div>
                <div className="col col-4">Product</div>
                <div className="col col-5">Image</div>
            </li>
            {
                    products.map(product =>{
                        return <li className="table-row">
                        <div className="col col-1" data-label="Name">{product.Name}</div>
                        <div className="col col-2" data-label="Phone">{product.Phone}</div>
                        <div className="col col-3" data-label="Address">{product.Address}</div>
                        <div className="col col-4" data-label="Product">{product.Ewastedata}</div>
                        <div className="col col-5" data-label="Image"><img width={50} height={50} src={product.Image} alt=''/></div>
                    </li>
                    })
            }
            
        
        </ul>
    </div>
    </>
    
  )
}

export default Products