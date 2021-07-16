import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
const business={
  imageSrc: './pp.jpg',
    name: 'Luca Pizzeria',
    address: '298 Atlantic Ave',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11201',
    category: 'Italian',
    rating: 4.20,
    reviewCount: 69
  };
const businesses=[business,business,business,business,business,business];
class App extends React.Component{
  searchYelp(term , location , sortBy){
    console.log(`Searching Yelp with ${term}, ${location} and ${sortBy}`)
  }
  
  
  render(){
  return (
    <div className="App">
      <h1>Yelp-Clone</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businesses}/>
        
    </div>
  );
  }
}

export default App;
