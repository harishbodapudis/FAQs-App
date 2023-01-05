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
  const symbol = idsList.includes(id) ? '-' : '+'
  return (
    <li className="question-box">
      <div className="question-button-box">
        <div>
          <p className="question-text">{questionText}</p>
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
