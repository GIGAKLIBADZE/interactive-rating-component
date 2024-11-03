import './Thanks.css';
import thanksIcon from '../../assets/images/illustration-thank-you.svg';

export default function Thanks({rate}) {
    return (
        <>  
          <div className="thanks-card">
                <img src={thanksIcon} alt="Done" class="thanks-img"/>
                <div className="result-container">
                  <p>You selected {rate} out of 5</p>
                </div>
                <h2 className="thanks-msg">Thank you!</h2>
                <p className="thanks-detailed-msg">We appreciate you taking the time to give a rating. 
                  If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </>
    )
}