myApp.service('tradeService',['$http','$location','UserService', function($http, $location, UserService) {
    console.log('haveService loaded!');
  
    const self = this;
    self.userService = UserService;
    self.tradeList = { tradelist: [] };

    self.getTradelist = function (){
      console.log('Getting Tradelist from the Database');
      $http({
        method: 'GET',
        url: `/trade/tradelist/${self.userService.userObject.id}`
      })
      .then(function(response){
        self.tradeList.tradelist = response.data;
      })
      .catch(function(error){
        console.log('error in Tradelist', error);
      })
    }//Gets the Tradelist from the Database
  
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
        url: `/trade/edit/${self.userService.userObject.id}`,
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
        url: `/trade/delete/${self.userService.userObject.id}`})
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