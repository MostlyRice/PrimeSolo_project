myApp.service('cardService',['$http','$location', function($http, $location) {
  console.log('cardService loaded!');

  const self = this;

  self.tradeslist = { tradeslist: [] };
  self.wishlist = { wishlist: [] };
  self.randomCard = { random: [] };
  self.searchOut = { cards: [] };
  const mtgURL = 'https://api.scryfall.com/cards/search?q=';

  self.searchApi = function (searchBar, searchParameter){
    console.log(searchBar);
    $http({
      method: 'GET',
      url: (`${mtgURL}${searchBar}`+`&unique=art`)
    })
    .then(function(response){
      console.log('success in search', response.data.data);
      console.log(response.data, 'Magic The Gathering search results!!!');
      self.searchOut.cards = response.data.data;
    })
    .catch(function(error){
      console.log('error in search', error);
    })
  }

  self.randomCard = function (){
    $http({
      method: 'GET',
      url: 'https://api.scryfall.com/cards/random'
    })
    .then(function(response){
      console.log('success in randomCard', response.data);
      console.log(response.data, 'Magic The Gathering Random result!!!');
      self.randomCard.random = response.data;
    })
    .catch(function(error){
      console.log('error in randomCard', error);
    })
  }

  self.addCardToList = function(data, card) {
    console.log(data, card);
    $http({
      method: 'POST',
      url: '/cards',
      data: {data:data,
             card:card}
    }).then(function (response) {
      $location.url('/search');
      self.newItem = {};
    }).catch(function (error) {
      console.log('post error', error);
    })
  }

}]);
