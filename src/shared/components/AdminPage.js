import React from 'react'

import TextInputForm from './TextInputForm'

const socket = io()

class AdminPage extends React.Component {

  constructor(props) {
    super(props)
  }

  _handleQuestionSubmit(value) {
    socket.emit('server:question', value)
  }

  _handleFormTypeSubmit(value) {
    socket.emit('server:formtype', value)
  }

  _handleFeedbackSubmit(value) {
    socket.emit('server:feedback', value)
  }

  _handleImageURLSubmit(value) {
    socket.emit('server:imageurl', value)
  }

  _handleAnswerSubmit(value) {
    socket.emit('client:answer', value)
  }

  render() {
    return (
      <div>
        <h1>Site Administration</h1>
        <TextInputForm onSubmit={this._handleQuestionSubmit} placeholder='Question' />
        <TextInputForm onSubmit={this._handleFormTypeSubmit} placeholder='Form type' />
        <TextInputForm onSubmit={this._handleFeedbackSubmit} placeholder='Feedback' />
        <TextInputForm onSubmit={this._handleImageURLSubmit} placeholder='Image URL' />
        <TextInputForm onSubmit={this._handleAnswerSubmit} placeholder='Answer' />
      </div>
    )
  }
}

export default AdminPage
