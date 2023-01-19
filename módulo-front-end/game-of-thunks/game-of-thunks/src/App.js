import { Component } from 'react';
import './App.css';
import CharFound from './components/CharFound';
import CharInput from './components/CharInput';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <CharInput />
      <CharFound />
    </div>
    );
  }
}

export default App;
