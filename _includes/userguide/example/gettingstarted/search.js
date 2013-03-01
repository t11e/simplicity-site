$('body')
  .simplicityPageSnapBack()
  .simplicityDiscoverySearch({
    url: 'http://freebase-movies.discoverysearchengine.com:8090/ws/query',
    backend: 'engine',
    controllerCallback: window.searchController
  })
  .simplicityDiscoverySearch('search');
