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

  self.editCard = function (){
    console.log('Edit!!!')
    swal("Inventory change! How many do you have now?", {
        content: "input",
        icon: "info",
        buttons: true,
        dangerMode: true,
  }).then((value) => {
    $http({
      method: 'PUT',
      url: `/list/edit/${self.userService.userObject.id}`,
      data: {value}
    }).then(function(response){
    swal(`Your inventory will reflect that value of ${value}x`, {
      icon: "success",})
  }).catch(function(error){
    console.log('error on editing quantity');
})
    });
  }//End of edit function

  self.deleteCard = function (){
    console.log('Delete!!!')
    swal({
    title: "Are you sure you want to delete?",
    text: "Once deleted, It's gone!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {$http({
      method: 'DELETE',
      url: `/list/delete/${self.userService.userObject.id}`})
      .then(function(response){
      swal("Poof! Your card has has been deleted!", {
        icon: "success",});
    })
    } else {
      swal("Not deleted!");
    }
  });
  }//This deletes the card from the database

  
}]);
