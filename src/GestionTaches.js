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
      this.handleChange = this.handleChange.bind(this);  
      this.ajouter = this.ajouter.bind(this); 
      this.handleDelete = this.handleDelete.bind(this);  
    };
    
  handleChange(event) {
  this.setState({inputValue: event.target.value});
  }

  ajouter() {
    
   if(this.state.inputValue!="") {

     this.setState(prevState => ({
       tachesArr: [{id :this.state.tachesArr.length+1, value : this.state.inputValue}, ...prevState.tachesArr],
     }))
     
     this.setState({inputValue: ""});
   }
  }
  
  handleDelete(t) {
    //alert('toto')
    console.log("1 - "+this.state.tachesArr[0]);             /////// 1 [object Object],[object Object],[object Object]
    console.log("2 - "+this.state.tachesArr[0].id);
    console.log("3 - "+this.state.tachesArr[0].value);
    const tachesArr = this.state.tachesArr.filter((x) => x.id !== t.id);
    this.setState({tachesArr : tachesArr});
    //console.log("4 - "+this.state.tachesArr);
  };

  render() {
    //console.log("5 - "+this.state.tachesArr);

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
                    value={tache.value} 
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