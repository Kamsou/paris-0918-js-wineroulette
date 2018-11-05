import React, { Component } from 'react';
import NbWinePossible from "./component/NbWinePossible";
import Prix from "./component/Prix"
import Colorbutton from "./component/Colorbutton"
import './style/App.css';

import Footer from './component/Footer/Footer';
import Searchbar from './component/Searchbar';
import BoutonReset from "./component/BoutonReset";


class App extends Component {
  state = {
    color: "Red Wine",
    subStyle: "",
    subCategory: "style",
    minprix: 0,
    maxprix: 10000,
    searchbar: ""
  };

  liftColor = color => {
    this.setState({ color: color });
  };
  liftsubStyle = subStyle => {
    this.setState({ subStyle: subStyle });
  };
  liftPrice = (minprix, maxprix) => {
    this.setState({ minprix: minprix, maxprix: maxprix });
  };
  liftsearchbar = searchbar => {
    this.setState({searchbar: searchbar});
  }
  liftsubCategory = subCategory => {
    this.setState({subCategory: subCategory});
  }


  render() {
    return (
    <div>
      <div className="App">
        <img src='http://image.noelshack.com/fichiers/2018/43/5/1540559518-wine-final.png'  alt="logprincipal" className="logoWine" />
        {/* <h3>Votre bouteille sans prise de tête</h3> */}
        <BoutonReset />
        <p></p>
        <Prix liftPrice={this.liftPrice} />
        <p></p>
        <Colorbutton liftColor={this.liftColor} 
                    liftsubStyle={this.liftsubStyle}
                    liftsubCategory={this.liftsubCategory} />
        <p></p>
        <div className="Searchbar">
        <Searchbar liftsearchbar={this.liftsearchbar} />
        {/* <Prix liftPrice={this.liftPrice} /> */}
        {/* <ExpansionPanel liftsearchbar={this.liftsearchbar}/> */}
        </div>
        <NbWinePossible color={this.state.color}
                        subStyle={this.state.subStyle}
                        subCategory={this.state.subCategory}
                        minprix={this.state.minprix}
                        maxprix={this.state.maxprix}
                        searchbar={this.state.searchbar}/>

        {/* <Carte color={this.state.color}
              subStyle={this.state.subStyle}
              minprix={this.state.minprix}
              maxprix={this.state.maxprix}
              searchbar={this.state.searchbar}/> */}
      </div>  
    
      <div className = "App-footer">
        <Footer />
      </div>

    </div>
    );
  }
}

export default App;