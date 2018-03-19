myApp.controller('searchController', ['searchService', function(searchService) {
  console.log('searchService created');
  var self = this;

  self.searchService = searchService;

  self.searchApi = (searchBar, ) => {
  searchService.searchApi(searchBar);
  }
}]);
