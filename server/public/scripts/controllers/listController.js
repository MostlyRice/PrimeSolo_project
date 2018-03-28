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

  }]);
  