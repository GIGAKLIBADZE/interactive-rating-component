import './Card.css';
import star from '../../assets/images/icon-star.svg';
import {useState} from "react";

export default function Card({setSubmit, rate, setRate}) {
    const button = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="card">
                <div className="star-container">
                    <img src={star} alt="Star"/>
                </div>
                <h1 className="question">How did we do?</h1>
                <p className="info">Please let us know how we did with your support request. 
                    All feedback is appreciated to help us improve our offering!</p>
                <div className="ratings">
                    {button.map((b) => {
                        return <button key={b} onClick={() => setRate(b)} style={{backgroundColor: rate === b? "#7c8798" : "", color: rate === b? "#ffffff" : ""}}>{b}</button>
                    })};
                </div>
                <button id="submit" onClick={() => rate && setSubmit(true)}>SUBMIT</button>
            </div>
        </>
    )
}