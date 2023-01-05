// Write your code here.

import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {ids: []}

  displayAnswer = id => {
    const {faqsList} = this.props
    const {ids} = this.state

    if (!ids.includes(id)) {
      this.setState(prevState => ({ids: [...prevState.ids, id]}))
    } else {
      const newIds = ids.filter(eachItem => eachItem !== id)
      this.setState(prevState => ({ids: [...newIds]}))
    }
  }

  render() {
    const {ids} = this.state
    const {faqsList} = this.props
    const {id, questionText, answerText} = faqsList

    return (
      <div className="faqs-box">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-items-box">
          {faqsList.map(eachItem => (
            <FaqItem
              key={eachItem.id}
              faqData={eachItem}
              displayAnswer={this.displayAnswer}
              idsList={ids}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
