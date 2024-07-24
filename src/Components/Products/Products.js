import React from 'react'
import VerticalNavbar from '../NavBar/NavBar';
import './Products.css';
import topimg from '../../images/Promotions/swit1.jpg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Products() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <VerticalNavbar activeLinkId="products" />
            <div className='container'>

                <div className='row'>
                    <h1 className='productsHeading'>Products</h1>
                </div>

                <div className='row mt-3'>
                    <div className='col-6'></div>
                    <div className='col-3'>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search by Products" aria-label="Search Products" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search by Vendor" aria-label="Search Vendor" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                </div>

                <div className='row mt-4 productsCardRow'>

                    {/* Product Card */}
                    <div className='productsCard'>
                        <div className='row'>
                            <img src={topimg} className="productImage" alt="Product Image" />
                        </div>
                        <div className='row mt-3'>
                            <h5 className='productsCardTopic'>Trendnet</h5>
                            <p className='productsCardModelNo'>Model No: TRD0001</p>
                        </div>
                        <div className='productButtonRow'>
                            {/* <button className='btn btn-warning productCardButton' onClick={handleShow}>View</button> */}
                            <button className='btn btn-info productCardButton'>Request Product</button>
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className='productsCard'>
                        <div className='row'>
                            <img src={topimg} className="productImage" alt="Product Image" />
                        </div>
                        <div className='row mt-3'>
                            <h5 className='productsCardTopic'>Trendnet</h5>
                            <p className='productsCardModelNo'>Model No: TRD0001</p>
                        </div>
                        <div className='productButtonRow'>
                            {/* <button className='btn btn-warning productCardButton' onClick={handleShow}>View</button> */}
                            <button className='btn btn-info productCardButton'>Request Product</button>
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className='productsCard'>
                        <div className='row'>
                            <img src={topimg} className="productImage" alt="Product Image" />
                        </div>
                        <div className='row mt-3'>
                            <h5 className='productsCardTopic'>Trendnet</h5>
                            <p className='productsCardModelNo'>Model No: TRD0001</p>
                        </div>
                        <div className='productButtonRow'>
                            {/* <button className='btn btn-warning productCardButton' onClick={handleShow}>View</button> */}
                            <button className='btn btn-info productCardButton'>Request Product</button>
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className='productsCard'>
                        <div className='row'>
                            <img src={topimg} className="productImage" alt="Product Image" />
                        </div>
                        <div className='row mt-3'>
                            <h5 className='productsCardTopic'>Trendnet</h5>
                            <p className='productsCardModelNo'>Model No: TRD0001</p>
                        </div>
                        <div className='productButtonRow'>
                            {/* <button className='btn btn-warning productCardButton' onClick={handleShow}>View</button> */}
                            <button className='btn btn-info productCardButton'>Request Product</button>
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className='productsCard'>
                        <div className='row'>
                            <img src={topimg} className="productImage" alt="Product Image" />
                        </div>
                        <div className='row mt-3'>
                            <h5 className='productsCardTopic'>Trendnet</h5>
                            <p className='productsCardModelNo'>Model No: TRD0001</p>
                        </div>
                        <div className='productButtonRow'>
                            {/* <button className='btn btn-warning productCardButton'>View</button> */}
                            <button className='btn btn-info productCardButton'>Request Product</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Trendnet (TRD0001)</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleClose}>
                    Request Product
                    </Button>
                </Modal.Footer>
            </Modal> */}

        </>
    )
}

export default Products