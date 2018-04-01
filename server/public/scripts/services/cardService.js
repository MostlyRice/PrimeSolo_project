myApp.service('cardService',['$http','$location','UserService', function($http, $location, UserService) {
  console.log('cardService loaded!');

  const self = this;
  self.userService = UserService;

  self.searchOut = { cards: [] };
  const mtgURL = 'https://api.scryfall.com/cards/search?q=';

  self.searchApi = function (searchBar, searchParameter){
    console.log(searchBar);
    $http({
      method: 'GET',
      url: (`${mtgURL}${searchBar}&unique=prints&c%3Arg`)
    })
    .then(function(response){
      console.log('success in search', response.data.data);
      console.log(response.data, 'Magic The Gathering search results!!!');
      self.searchOut.cards = response.data.data;
    })
    .catch(function(error){
      console.log('error in search', error);
    })
  }//Searchs for cards in the Scryfall API

  self.addCardToList = function(data, card, numberOfCards) {
    self.userService.getuser();
    console.log(data, card, numberOfCards);
    $http({
      method: 'POST',
      url: '/cards',
      data: {
        userID: self.userService.userObject.id,
        data:data,
        card:card,
        numberOfCards:numberOfCards}
      }).then(function (response) {
        $location.url('/search');
        self.newItem = {};
      }).catch(function (error) {
        console.log('post error', error);
      })
    }//Adds cards to the Cards Table

  }]);
