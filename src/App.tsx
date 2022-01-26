import React from 'react';
import {Header} from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainWindow } from './components/MainWindow';
import { connect } from 'react-redux';

<MainWindow />

function App(props:any) {
  return (
    <>  
      <Header />    
      <MainWindow />
    </>
    
  );
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => {
  return {
    addAnswer: ()=>dispatch({type:'LAST_NAME'})
  }
}

const mapStateToProps = (state: any) => {
  /*console.log( "mapStateToProps - State = ", state );*/
  return {
    stateValue : state
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(App);



