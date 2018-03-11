import React, { Component, Fragment } from 'react'
import { createFetcher, Fetcher } from 'drum-roll'

const textFetcher = createFetcher(
  text =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const n = text.toLowerCase().charCodeAt(0) - 96
        if (n > 26 || n < 1) {
          reject('This is not a letter')
        }
        resolve(n)
      }, 1000)
    }),
)

export default class App extends Component {
  state = { text: null }
  handleClick = () => {
    this.setState({ text: this.input.value })
  }
  render() {
    const { text } = this.state
    return (
      <Fragment>
        <input ref={el => (this.input = el)} maxLength={1} />
        <button onClick={this.handleClick}>convert</button>
        <div>
          {text && (
            <Fetcher fetcher={textFetcher(text)} delay={100}>
              {(data, error) => (data ? data : error ? '💥' : '⏳')}
            </Fetcher>
          )}
        </div>
      </Fragment>
    )
  }
}
