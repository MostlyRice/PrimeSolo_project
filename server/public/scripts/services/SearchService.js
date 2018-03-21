myApp.service('searchService', 'UserService' ['$http','$location', function($http, $location) {
  console.log('searchService loaded!');

  const self = this;
  const mtgURL = 'https://api.magicthegathering.io/v1/cards?name=';
  self.searchOut = {cards: []};


  self.searchApi = function (searchBar){
    console.log(searchBar);
    $http({
      method: 'GET',
      url: `${mtgURL}${searchBar}`
    })
  .then(function(response){
    console.log('success in search', response);
    console.log(response.data.cards, 'Magic The Gathering search results!!!');
    self.searchOut.cards = response.data.cards;
    console.log(self.searchOut.cards, 'Cards getting searched');
    
  })
  .catch(function(error){
    console.log('error in search', error);
  })
}
}]);
