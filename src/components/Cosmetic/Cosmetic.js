import React from 'react';
import './Cosmetic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cosmetic = (props) => {
    const { name, famousAs, birthDate, birthPlace, died, totalBooks, image } = props.cosmetic;
    const { handleSelectPerson } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top person-img img-fluid" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6>FamousAs: {famousAs}</h6>
                    <p>BirthDate: {birthDate}</p>
                    <p>BirthPlace: {birthPlace}</p>
                    <p>Died: {died}</p>
                    <h6>TotalBooks: {totalBooks}</h6>
                </div>

                <div className="card-footer">
                    <button
                        className="btn btn-danger w-100"
                        onClick={() => { handleSelectPerson(props.cosmetic) }}>

                        <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cosmetic;