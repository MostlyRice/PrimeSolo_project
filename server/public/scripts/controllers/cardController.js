myApp.controller('cardController', ['cardService', function(cardService) {
    console.log('cardController created');

    const self = this;
    self.cardService = cardService;
  
    self.searchApi = (searchBar, searchParameter) => {
    cardService.searchApi(searchBar, searchParameter);
    
    }
  }]);
  