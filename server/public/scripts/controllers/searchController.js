myApp.controller('searchController', ['searchService', function(searchService) {
  console.log('searchService created');

  const self = this;
  self.searchService = searchService;

  self.searchApi = (searchBar) => {
  searchService.searchApi(searchBar);
  }
}]);
