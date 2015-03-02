newspaper.controller('BeatsCtrl', function BeatsrCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory, ReportersFactory) {
  $scope.BeatsFactory = BeatsFactory
  $scope.ReportersFactory = ReportersFactory
  $scope.reporter =  UtilitiesFactory.findById(BeatsFactory.reporters, $stateParams.reporterId)

  $scope.matchName = function(search) {
    return function(item) { return item.name.match(search); }
  };

  $scope.createBeat = function() {
  	var beat = $scope.BeatsFactory.createBeat($scope.beatName);
  };
  
  $scope.addReporter = function() {
 
  	debugger;
  };

});
