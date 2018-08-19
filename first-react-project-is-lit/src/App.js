// Importing the React class and ReactDOM
import React from 'React'
import ReactDOM from 'react-dom'

import { Header } from './Components/Header';
import { Textbox } from './Components/Textbox';
import { DisplayToday, DisplayTomorrow, DisplayDayAfterTomorrow } from './Components/Display';

// App component which is our parent component
class App extends React.component{
  constructor(props){
    super(props);
    this.state = {
      'Today' : [],
      'Tomorrow' : [],
      'Day_After_Tomorrow' : [],
      'username' : 'yo buddy!'
    }
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }
}