myApp.controller('haveController', ['haveService', function(haveService) {
  console.log('haveController created');

  const self = this;
  self.getHavelist = haveService.getHavelist;
  self.getHavelist();

  // self.editcard = () => {
  //   haveService.editCard(numberOfCards);
  // }//Edits the quantity of Magic cards in the table

  // self.deleteCard = () => {
  //   haveService.deleteCard();
  // }//Edits the quantity of Magic cards in the table


  self.haveList = haveService.haveList    
  self.deleteCard = haveService.deleteCard
  self.editCard = haveService.editCard
}]);
