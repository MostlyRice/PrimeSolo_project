myApp.service('searchService', ['$http', function($http) {
  console.log('searchService loaded!');

  const self = this;
  const mtgURL = 'https://api.magicthegathering.io/v1/cards?name=';
  self.searchOut = {card: {}};

  self.searchApi = function (searchBar){
    console.log(searchBar);
    $http({
      method: 'GET',
      url: `${mtgURL}${searchBar}`
    })
  .then(function(response){
    console.log('success in search', response);
    console.log(response.data.cards, 'Magic The Gathering search results!!!');
    self.searchOut = response.data.cards;
  })
  .catch(function(error){
    console.log('error in search', error);
  })
}
}]);
