import './index.css'

const DenominationItem = props => {
  const {denomination, decreaseAmount} = props
  const {value} = denomination

  const changeAmount = () => {
    decreaseAmount(value)
  }

  return (
    <li className="denomination">
      <button type="button" className="button" onClick={changeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
