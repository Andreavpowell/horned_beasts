import { Component } from 'react';

// main needs to know the title pass in... with props

class Main extends Component {
  render() {
    return (
      <>
        <h1>I am main. My message is {this.props.message}</h1>
        <HornedBeast title={'Rhino'} />
      </>
    )
  }
}

class HornedBeast extends Component {
  render() {
    return <h1>I am a horned beast with title of {this.props.title}</h1>
  }
}

export default Main