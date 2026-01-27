import React from 'react'
import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useNavigate } from 'react-router';


const PaymentSummary = ({ paymentSummary, loadCart }) => {
  const navigate = useNavigate();

  const createOrder = async () => {
    await axios.post('/api/orders');
    await loadCart();
     //cart is already saved in the backend so it can take info from there and create a order
     navigate('/orders');
  };
  return (
    <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            {paymentSummary && (
              <>
                <div className="payment-summary-row">
                  <div>Items ({paymentSummary.totalItems}):</div>
                  <div className="payment-summary-money"
                  data-testid="payment-summary-product-cost"
                  >
                    {formatMoney(paymentSummary.productCostCents)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div className="payment-summary-money"
                  data-testid="payment-summary-shipping-cost">
                    {formatMoney(paymentSummary.shippingCostCents)}
                  </div>
                </div>

                <div className="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div className="payment-summary-money"
                  data-testid="payment-summary-total-before-tax">
                    {formatMoney(paymentSummary.totalCostBeforeTaxCents)}{" "}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money"
                  data-testid="payment-summary-tax">
                    {formatMoney(paymentSummary.taxCents)}
                  </div>
                </div>

                <div className="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div className="payment-summary-money"
                  data-testid="payment-summary-total">
                    {formatMoney(paymentSummary.totalCostCents)}
                  </div>
                </div>

                <button className="place-order-button button-primary"
                data-testid="place-order-button"
                onClick={createOrder}>
                  Place your order
                </button>
              </>
            )}
          </div>
  )
}

export default PaymentSummary
