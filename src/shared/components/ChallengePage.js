import React from 'react'
import { Link } from 'react-router'

import TextInputForm from './TextInputForm'
import OptionInputForm from './OptionInputForm'

const socket = io()

class ChallengePage extends React.Component {

  constructor(props) {
    super(props)

    this._handleAnswerSubmit = this._handleAnswerSubmit.bind(this)

    this.state = {
      question: 'Loading...',
      feedback: '',
      imageUrl: '',
      answer: '',
      formType: ''
    }

    socket.on('server:question', (data) => {
      this._handleQuestionUpdate(data)
    })

    socket.on('server:feedback', (data) => {
      this._handleFeedbackUpdate(data)
    })

    socket.on('server:formtype', (data) => {
      this._handleFormTypeUpdate(data)
    })

    socket.on('server:imageurl', (data) => {
      this._handleImageURLUpdate(data)
    })

    socket.on('client:answer', (data) => {
      this._handleAnswerUpdate(data)
    })
  }

  _handleQuestionUpdate(value) {
    this.setState({
      question: value
    })
  }

  _handleFeedbackUpdate(value) {
    this.setState({
      feedback: value
    })
  }

  _handleFormTypeUpdate(value) {
    this.setState({
      formType: value
    })
  }

  _handleImageURLUpdate(value) {
    this.setState({
      imageUrl: value
    })
  }

  _handleAnswerUpdate(value) {
    this.setState({
      answer: value
    })
  }

  _handleAnswerSubmit(value) {
    socket.emit('client:answer', value)
  }

  render() {
    let form = null

    switch (this.state.formType) {
      case 'text':
        form = <TextInputForm onSubmit={this._handleAnswerSubmit} placeholder='Type your answer here' />
        break
      case 'option':
        form = <OptionInputForm onSubmit={this._handleAnswerSubmit} />
        break
      case '':
        form = null
        break
    }

    let answer = null

    if (this.state.answer.length > 0) {
      answer = <h3>Airis answered <span className='bold'>{this.state.answer}</span></h3>
    }

    let feedback = null

    if (this.state.feedback.length > 0) {
      feedback = <h3>{this.state.feedback}</h3>
    }

    let image = null

    if (this.state.imageUrl.length > 0) {
      image = <img className='img-responsive' src={this.state.imageUrl} />
    }

    return (
      <div>
        <h1>{this.state.question}</h1>
        {image}
        {form}
        {answer}
        {feedback}
      </div>
    )
  }
}

export default ChallengePage
