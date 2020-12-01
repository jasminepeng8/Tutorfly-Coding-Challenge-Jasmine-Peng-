import Button from "./button";
import React from "react";
import PropTypes from "prop-types";

class ButtonGrid extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
        <div className="button-grid-component">
        <div className="button-row"> 
        <Button 
        label={'+'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'-'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'*'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'/'}
        handleClick = {this.handleClick}/> 
      </div> 
      <div className="button-row"> 
        <Button 
        label={'%'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'7'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'8'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'9'}
        handleClick = {this.handleClick}/> 
      </div> 
      <div className="button-row"> 
        <Button 
        label={'^'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'4'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'5'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'6'}
        handleClick = {this.handleClick}/> 
      </div> 
      <div className="button-row"> 
        <Button 
        label={'CE'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'1'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'2'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'3'}
        handleClick = {this.handleClick}/> 
      </div> 
      <div className="button-row"> 
        <Button 
        label={'AC'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'0'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'.'}
        handleClick = {this.handleClick}/> 
        <Button 
        label={'='}
        handleClick = {this.handleClick}/> 
      </div> 
      </div>
    );
  }
}

//export ButtonGrid
export default ButtonGrid;

