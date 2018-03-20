myApp.controller('searchController', ['searchService', function(searchService) {
  console.log('searchController created');

  const self = this;
  self.searchService = searchService;

  self.searchApi = (searchBar) => {
  searchService.searchApi(searchBar);
  }
}]);
