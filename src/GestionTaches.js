import React, { Component } from 'react';
import './App.css';
import Tache from './Tache';

class GestionTaches extends Component  {

  constructor(props) {
    super(props);
    this.state = {
        tachesArr : [],
        inputValue : ""
      }
    };
    
  handleChange=(event) => {
  this.setState({inputValue: event.target.value});
  }

  ajouter=() => { 
   if(this.state.inputValue!=="") {
     this.setState(prevState => ({
       tachesArr: [{id :this.state.tachesArr.length+1, value : this.state.inputValue}, ...prevState.tachesArr],
     }))
     this.setState({inputValue: ""});
   }
  }
  
  handleDelete = (t) => {
    const tachesArr = this.state.tachesArr.filter((x) => x.id !== t.id);
    this.setState({tachesArr : tachesArr});
  };

  render() {
    return (
      <div className="container">
        <div className="titre">Todo List</div>
        <div className="list-container">
          <div className="liste">
            <table className="tableau">
              <thead>
                <tr>
                  <th><form>
                    <input 
                      type="text" 
                      id="texte-ajout" 
                      name="texte-ajout" 
                      value={this.state.inputValue} 
                      onChange={this.handleChange} 
                      placeholder="Renseigner un Item">
                    </input></form></th>
                  <th className="delete-item"><button onClick={this.ajouter} className="ajouter">AJOUTER</button></th>
                </tr>
              </thead>
              <tbody>  
              {
                  this.state.tachesArr.map((tache) => (
                  <Tache 
                    key={tache.id} 
                    tache={tache} 
                    onDelete={this.handleDelete}
                  />
                  ))
              }              
              </tbody>
            </table>
          </div>
        </div>
      </div>     
    );
 }
}

export default GestionTaches;
