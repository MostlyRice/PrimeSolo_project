myApp.controller('haveController', ['haveService', function(haveService) {
  console.log('haveController created');

  const self = this;
  self.getHavelist = haveService.getHavelist;
  self.getHavelist();


  self.haveList = haveService.haveList    
  self.deleteCard = haveService.deleteCard
  self.editCard = haveService.editCard
}]);
