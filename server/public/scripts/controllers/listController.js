myApp.controller('listController', ['listService', function(listService) {
    console.log('listController created');
  
    const self = this;
    self.listService = listService;
    self.getHavelist = listService.getHavelist;
    self.getTradelist = listService.getTradelist;
    self.getWishlist = listService.getWishlist;


    self.getHavelist();
    self.getTradelist();
    self.getWishlist();

    self.haveList = listService.haveList
    self.tradeList = listService.tradeList
    self.wishList = listService.wishList
        
    self.deleteCard = listService.deleteCard
    self.editCard = listService.editCard
  }]);
  