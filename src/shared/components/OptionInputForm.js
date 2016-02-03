import React from 'react'

class OptionInputForm extends React.Component {

  constructor(props) {
    super(props)

    this._handleSubmitYes = this._handleSubmitYes.bind(this)
    this._handleSubmitNo = this._handleSubmitNo.bind(this)
  }

  _handleSubmitYes() {
    this.props.onSubmit('Yes')
  }

  _handleSubmitNo() {
    this.props.onSubmit('No')
  }

  render() {
    return (
      <div className='options'>
        <button onClick={this._handleSubmitYes} className='btn btn-success'>Yes</button>&nbsp;
        <button onClick={this._handleSubmitNo} className='btn btn-danger'>No</button>
      </div>
    )
  }
}

export default OptionInputForm
