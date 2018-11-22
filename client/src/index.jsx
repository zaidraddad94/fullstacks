import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    var that = this 
    console.log(`${term} was searched`);
   $.ajax({
    type: "POST",
    url: '/repos',
    data: {data:term},
    success: function (xxx){
      console.log(that.state.repos)
      // that.setstate.repos= xxx
        that.setState({
          repos:xxx
        })
      console.log( "after", that.state.repos)
      } 
   });

  console.log(`${term} was searched`);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <div>
    <h4> Repo List Component </h4>
    There are {this.state.repos.length} repos.
  </div>
      

      <Search onSearch={this.search.bind(this)}/>
      <ul>
      {this.state.repos.map( item => <li><a href = {item.html_url}>{item.full_name}</a></li>  )}
      </ul>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// at the mean page make map over the aray of repos to show one li item with the name and link 
