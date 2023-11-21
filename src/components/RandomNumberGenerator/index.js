// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    const generateRandomNumber = Math.floor(Math.random() * 100)
    this.setState({number: generateRandomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">Random Number</h1>
          <p className="label">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
