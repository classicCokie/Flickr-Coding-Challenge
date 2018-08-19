'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flickrFrontEndApp'));

  var MainCtrl;
  var ApiService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MainCtrl = $controller('MainCtrl', {});
  }));

  it('should check all variables', function () {
    expect(MainCtrl.allItems.length).toBe(0);
    expect(MainCtrl.displayedItems.length).toBe(0);
    expect(MainCtrl.query.length).toBe(0);
    expect(MainCtrl.url).toEqual('http://localhost:3000/flickrFeed');
  });

  it('should check filter Items function', function () {
    var items = [
        {title: 'Alpha', description: 'test text'},
        {title: 'Alpha2', description: 'test text'},
        {title: 'Beta', description: 'test text'},
        {title: 'Omega', description: 'test text'},
    ]
    var result = MainCtrl.filterItems(items, 'Alpha');
    expect(result.length).toBe(2);

    result = MainCtrl.filterItems(items, 'Beta');
    expect(result.length).toBe(1);

  });

});
