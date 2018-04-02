myApp.controller('cardController', ['cardService', function(cardService) {
  console.log('cardController created');

  const self = this;
  self.cardService = cardService;

  self.searchApi = (searchBar) => {
    cardService.searchApi(searchBar);
  }//Searches for a Magic card within the search parameter

  self.addCardToList = (data, card, numberOfCards) =>{
    cardService.addCardToList(data, card, numberOfCards);
  }//Adds card to the database
}]);
