myApp.service('wishService',['$http','$location','UserService', function($http, $location, UserService) {
    console.log('wishService loaded!');
  
    const self = this;
    self.userService = UserService;
    self.wishList = { wishlist: [] };
  
    self.getWishlist = function (){
      console.log('Getting Wishlist from the Database');
      $http({
        method: 'GET',
        url: `/wish/wishlist/${self.userService.userObject.id}`
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
        url: `/wish/edit/${self.userService.userObject.id}`,
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
        url: `/wish/delete/${self.userService.userObject.id}`})
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
  