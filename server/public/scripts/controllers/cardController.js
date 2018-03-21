myApp.controller('cardController', ['searchService', function(cardService) {
    console.log('cardController created');
  
    const self = this;
    self.cardService = cardService;
  
  }]);
  