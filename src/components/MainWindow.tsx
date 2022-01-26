import React, {Component} from 'react'
import MainContainer from '../components/MainContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainWindow.css'
import Form from 'react-bootstrap/Form'
import {createStore} from 'redux'
import setQuestion from '../store/actions';
import getAnswer from '../store/actions';





/*const question = setQuestion();*/

const answer = getAnswer();


  
  export class MainWindow extends Component{
    
    inputHandler(event: any) {
      console.log(event.target.value);
      answer.payload = event.target.value;
      answer.type = 'DATA'
    }

    
    render(){
        
    return(
        <MainContainer>
        <div className = "wrapper">
        <h2 className = "text-center question">"WHO?"</h2>
        <div className = "mb-8">
        <Form.Label htmlFor="inputAnswer form-label">Let's play</Form.Label>
        
        <Form.Control className="mb-8 form-input" placeholder="Type your answer, please"
        type="text"
        id="inputtext"
        aria-describedby="textBlock"
        onChange={this.inputHandler}   
        
        />
      
      <Form.Text id="textBlock mb-8 form-subtext" muted>
        Your can return and change your answer in a future
      </Form.Text>
      </div>
      <div>
      
      <div className = "btn-group">              
      <button type="submit" className="btn btn-primary mt-8">BACK</button>      
      <button type="submit" className="btn btn-primary mt-8 justify-content-end">NEXT</button>
      
      </div>

      </div>
      </div>
      
        </MainContainer>
    )
}
}

 