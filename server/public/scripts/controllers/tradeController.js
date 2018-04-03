myApp.controller('tradeController', ['tradeService', function(tradeService) {
    console.log('tradeController created');
  
    const self = this;
    self.tradeService = tradeService;
    self.getTradelist = tradeService.getTradelist;

    self.getTradelist();
    self.tradeList = tradeService.tradeList
 
        
    self.deleteCard = tradeService.deleteCard
    self.editCard = tradeService.editCard
  }]);
  