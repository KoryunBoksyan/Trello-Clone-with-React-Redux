import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import {DragDropContext} from "react-beautiful-dnd";

class App extends Component {

  onDragEnd = () => {
    //TODO: reordering logic
  };

  render () {
    const {lists} = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
            <h2>Trello Clone With React-Redux</h2>
            <div style={styles.listsContainer}>
              {lists.map(list => <TrelloList 
                listID={list.id}
                key={list.id} 
                title={list.title} 
                cards={list.cards}/>)}
              <TrelloActionButton list/>
            </div>     
        </div>
      </DragDropContext>
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
