import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {textInput: '', newData: []}

  getEnteredInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickAddText = e => {
    e.preventDefault()
    const {textInput} = this.state

    const newText = {
      id: v4(),
      textInput,
    }

    this.setState(prevState => ({
      newData: [...prevState.newData, newText],
      textInput: '',
    }))
  }

  render() {
    const {textInput, newData} = this.state
    console.log(textInput)
    return (
      <div className="app-container">
        <div className="character-display-card">
          <h1 className="character-display-heading">
            Count the characters like a Boss...
          </h1>
          <ul>
            {newData.length !== 0 ? (
              newData.map(eachText => (
                <li key={eachText.id}>
                  <p className="text-input">
                    {eachText.textInput} : {eachText.textInput.length}
                  </p>
                </li>
              ))
            ) : (
              <div className="image-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}
          </ul>
        </div>
        <div className="character-count-card">
          <h1 className="count-heading">Character Counter</h1>

          <div className="input-text-card">
            <form onSubmit={this.onClickAddText}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                value={textInput}
                onChange={this.getEnteredInput}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default App
