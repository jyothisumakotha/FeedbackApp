import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {click: true}

  onEmoji = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }

  render() {
    const {click} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {click ? (
          <div className="card-container">
            <h1 className="question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <li className="emoji-item">
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    key={eachEmoji.id}
                    className="emoji"
                    onClick={this.onEmoji}
                  />
                  <p className="reaction">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="love-container">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
            <h1 className="heading">Thank you!</h1>
            <p className="paragraph">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
