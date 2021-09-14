import { Component } from 'react';

// main needs to know the title pass in... with props

class Main extends Component {
  render() {
    return (
      <>
      <div>
        <h2>I am main. My message is {this.props.message}</h2>
        </div>
        <HornedBeast title={'Rhino'} img={<img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" alt="Rhino Family" title="Rhino Family"></img>} desc={<p>I have one giant horn.</p>}/>
        <HornedBeast title={'Unicorn'} img={<img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" alt="Unicorn Head" title="Unicorn Head"></img>} desc={<p> I also have one giant horn. </p>}/>
      </>
    )
  }
}

class HornedBeast extends Component {
  render() {
    return (
    <>
      <h2>I am a horned beast named {this.props.title}</h2>
      {this.props.img}
      {this.props.desc}
    </>
    )
  }
}

export default Main