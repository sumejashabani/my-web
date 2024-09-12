import React from 'react';
const PaymentModal = ({ handlePaymentClose, handlePaymentSubmit }) => {
  return (
    <div className="payment-modal">
      <div className="payment-content">
        <span className="close-btn" onClick={handlePaymentClose}>&times;</span>
        <h3>Shipping & Payment Information</h3>
        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label htmlFor="City" className="form-label">City:</label>
            <input type="text" id="City" className="form-input" name="City" required />
          </div>
          <div className="form-group">
            <label htmlFor="Address" className="form-label">Address:</label>
            <input type="text" id="Address" className="form-input" name="Address" required />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input type="text" id="cardNumber" className="form-input" name="cardNumber" required maxLength="16" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
              <input type="text" id="expiryDate" className="form-input" name="expiryDate" required placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" id="cvv" className="form-input" name="cvv" required maxLength="3" />
            </div>
          </div>
          <button type="submit" className="submit-payment-btn">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};
export default PaymentModal;