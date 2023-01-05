// Write your code here.

import './index.css'

const FaqItem = props => {
  const {faqData, displayAnswer, idsList} = props
  const {id, questionText, answerText} = faqData

  const showAnswer = () => {
    displayAnswer(id)
  }

  const answerItem = idsList.includes(id) ? (
    <p className="answer-text">{answerText}</p>
  ) : (
    ''
  )
  const symbol = idsList.includes(id) ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
      className="plus-minus-img"
      alt="minus"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
      className="plus-minus-img"
      alt="plus"
    />
  )
  return (
    <li className="question-box">
      <div className="question-button-box">
        <div>
          <h1 className="question-text">{questionText}</h1>
        </div>
        <div>
          <button type="button" onClick={showAnswer} className="plus-minus-btn">
            {symbol}
          </button>
        </div>
      </div>
      <div className={answerItem ? 'answer-box' : ''}>{answerItem}</div>
    </li>
  )
}

export default FaqItem
