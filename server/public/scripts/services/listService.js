myApp.service('listService',['$http','$location','UserService', function($http, $location, UserService) {
  console.log('listService loaded!');

  const self = this;
  self.haveList = { havelist: [] };
  self.tradeList = { tradelist: [] };
  self.wishList = { wishlist: [] };

  self.getHavelist = function (){
    console.log('Getting Havelist from the Database');
    $http({
      method: 'GET',
      url: `/list/havelist`
    })
    .then(function(response){
      console.log('success in getting Havelist from the database', response.data);
      self.haveList.havelist = response.data;
    })
    .catch(function(error){
      console.log('error in Havelist', error);
    })
  }//Gets the Havelist from the Database

  self.getTradelist = function (){
    console.log('Getting Tradelist from the Database');
    $http({
      method: 'GET',
      url: `/list/tradelist`
    })
    .then(function(response){
      console.log('success in getting Tradelist from the database', response.data);
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
      url: `/list/wishlist`
    })
    .then(function(response){
      console.log('success in getting wishlist from the database', response.data);
      self.wishList.wishlist = response.data;
    })
    .catch(function(error){
      console.log('error in Wishlist', error);
    })
  }//Gets the Wishlist from the Database
}]);
