import React from 'react'; 
import CalculatorTitle from './calculatorTitle.js'; 
import Description from './description.js'; 
import DisplayScreen from './displayScreen.js'; 
import ButtonGrid from './buttongrid.js';

import evaluate from '../computation/evaluate'; 


class Calculator extends React.Component { 
    
  constructor() {
      super(); 

      this.state = {
        question: '',
        answer: '',
      };
      
      this.handleClick = this.handleClick.bind(this);    
    };


   handleClick(event){

    const value = event.target.value;

    switch (value) {
      case '=': {
    		if(this.state.question!=='')
        {
    			var ans='';
          ans = evaluate(this.state.question);
    			this.setState({ answer: ans , question: ''});
    			break;
    		}
      }
      case 'AC': {
        this.setState({ question: '', answer: '' });
        break;
      }

	    case 'CE': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
    }
     default: {
      this.setState({ question: this.state.question += value})
      break;
    }
  }
}

    render()
    {
        return ( 
            <div className="frame"> 
            <CalculatorTitle value="Simple Calculator"/>  
            <div class="mainBody"> 
            <DisplayScreen 
            answer = {this.state.answer} 
            question = {this.state.question}/> 
            <ButtonGrid clickHandler={this.handleClick} />
            <Description value="made by Jasmine Peng, 2020"/>
            </div> 
            </div> 
            ); 
    } 
      
}

//Export calculator
export default Calculator;