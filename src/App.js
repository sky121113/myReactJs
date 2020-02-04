// @flow
import React,{ Component } from 'react';
import HelloWorld from './HelloWorld'
type Props = {}
class App extends Component<Props> {
  render() {
    return (
      <HelloWorld text="今天就開始學React!" abc="今天就開始學React!123"/>
    );
  }
}

export default App