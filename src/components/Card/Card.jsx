import './Card.css';
import star from '../../assets/images/icon-star.svg';

export default function Card() {
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
                    <button id="one">1</button>
                    <button id="two">2</button>
                    <button id="three">3</button>
                    <button id="four">4</button>
                    <button id="five">5</button>
                </div>
                <button id="submit">SUBMIT</button>
            </div>
        </>
    )
}