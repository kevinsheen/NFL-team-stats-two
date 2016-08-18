'use strict';

describe('Service: teamstats', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var teamstats;
  beforeEach(inject(function (_teamstats_) {
    teamstats = _teamstats_;
  }));

  it('should do something', function () {
    expect(!!teamstats).toBe(true);
  });

});
