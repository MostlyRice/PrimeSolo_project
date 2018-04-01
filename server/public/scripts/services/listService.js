myApp.service('listService',['$http','$location','UserService', function($http, $location, UserService) {
  console.log('listService loaded!');

  const self = this;
  self.userService = UserService;

  self.haveList = { havelist: [] };
  self.tradeList = { tradelist: [] };
  self.wishList = { wishlist: [] };


  self.calculateCollectionTotal = function(){
    let totalCollection = 0;
    for (let card of self.haveList.havelist) { 
      let cardTotal = (card.usd * card.quantity)
      
      totalCollection += cardTotal
    }
    return totalCollection.toFixed(2);
  }//Calculates the monetary value of the cards in the HaveCollection
  
  self.getHavelist = function (){
    console.log('Getting Havelist from the Database');
    $http({
      method: 'GET',
      url: `/list/havelist/${self.userService.userObject.id}`
    })
    .then(function(response){
      self.haveList.havelist = response.data;
      self.calculateCollectionTotal();
      console.log('success in getting Havelist from the database', self.calculateCollectionTotal());
    })
    .catch(function(error){
      console.log('error in Havelist', error);
    })
  }//Gets the Havelist from the Database

  self.getTradelist = function (){
    console.log('Getting Tradelist from the Database');
    $http({
      method: 'GET',
      url: `/list/tradelist/${self.userService.userObject.id}`
    })
    .then(function(response){
      self.tradeList.tradelist = response.data;
    })
    .catch(function(error){
      console.log('error in Tradelist', error);
    })
  }//Gets the Tradelist from the Database

  self.getWishlist = function (){
    console.log('Getting Wishlist from the Database');
    $http({
      method: 'GET',
      url: `/list/wishlist/${self.userService.userObject.id}`
    })
    .then(function(response){
      self.wishList.wishlist = response.data;
    })
    .catch(function(error){
      console.log('error in Wishlist', error);
    })
  }//Gets the Wishlist from the Database
}]);
