myApp.service('cardService',['$http','$location', function($http, $location) {
  console.log('cardService loaded!');

  const self = this;

  self.tradeslist = { tradeslist: [] };
  self.wishlist = { wishlist: [] };
  self.decklist = { decklist: [] };
  self.searchOut = { cards: [] };
  const mtgURL = 'https://api.magicthegathering.io/v1/cards?';

  self.searchApi = function (searchBar, searchParameter){
    console.log(searchBar, searchParameter);
    $http({
      method: 'GET',
      url: (`${mtgURL}${searchParameter}${searchBar}`)
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


  self.addCardToCards = function(data) {
    console.log();
    $http({
      method: 'POST',
      url: '/cards',
      data: {cardname: name, type: type, image: imageUrl}
    }).then(function (response) {
      $location.url('/user');
      self.newItem = {};
    }).catch(function (error) {
      console.log('post error', error);
    })
  }

}]);
