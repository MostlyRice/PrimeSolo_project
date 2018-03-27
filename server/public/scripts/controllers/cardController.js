myApp.controller('cardController', ['cardService', function(cardService) {
    console.log('cardController created');

    const self = this;
    self.cardService = cardService;
    
  
    self.searchApi = (searchBar) => {
      cardService.searchApi(searchBar);
  }//Searches for a Magic card within the search parameter

    self.randomCard = () => {
      cardService.randomCard();
  }//Pulls up a random Magic card to display

    self.addCardToList = (data, card) =>{
      cardService.addCardToList(data, card);
  }//Adds card to the database
  }]);
  