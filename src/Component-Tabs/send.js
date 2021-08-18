import React from "react"
import sendfiles from '../services/sendFiles'


class Send extends React.Component {
  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)

  }

  handleSend = async () => {

    let answer
    try {
      answer = await sendfiles.sendFiles()
    } catch (error) {
      console.log(error)
    }

  }

  render() {
    return <div className="position">
      <button className="btn btn-info" onClick={this.handleSend}>Send</button>
    </div>
  }
}

export default Send;