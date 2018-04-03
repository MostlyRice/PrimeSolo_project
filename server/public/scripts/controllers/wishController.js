myApp.controller('wishController', ['wishService', function(wishService) {
    console.log('wishController created');
  
    const self = this;
    self.getWishlist = wishService.getWishlist;
    self.getWishlist();


    self.wishList = wishService.wishList    
    self.deleteCard = wishService.deleteCard
    self.editCard = wishService.editCard
  }]);
  