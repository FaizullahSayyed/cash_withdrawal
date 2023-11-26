import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  decreaseAmount = value => {
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="name-container">
            <div className="logo-container">s</div>
            <div className="name">
              <p>Sarah Williams</p>
            </div>
          </div>
          <div className="balance-container">
            <p className="balance-container-title">Your Balance</p>
            <div className="balance-section-right-side-container">
              <p className="remaining-amount">{currentBalance}</p>
              <div className="title-2">In Rupees</div>
            </div>
          </div>
          <div className="denomination-container">
            <p className="denomination-heading">Withdraw</p>
            <p className="denomination-paragraph">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations">
              {denominationsList.map(denomination => (
                <DenominationItem
                  denomination={denomination}
                  key={denomination.id}
                  decreaseAmount={this.decreaseAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
