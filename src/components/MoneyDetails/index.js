// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-image"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testId="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-image"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testId="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-image"
        />
        <div>
          <p className="details-text">Your expenses</p>
          <p className="details-money" data-testId="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
