import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

class App extends Component {
  render () {
    const {lists} = this.props;

    return (
      <div className="App">
          <h2>Trello Clone With React-Redux</h2>
          <div style={styles.listsContainer}>
            {lists.map(list => <TrelloList 
              key={list.id} 
              title={list.title} 
              cards={list.cards}/>)}
            <TrelloActionButton list/>
          </div>     
      </div>
    );
  } 
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDiraction: "row",
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
