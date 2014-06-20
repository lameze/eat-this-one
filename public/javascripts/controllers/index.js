angular.module('eat-it')
    .controller('indexController', ['$scope', function($scope) {

    $scope.pageTitle = 'Eat-it';

    $scope.lang = {};
    $scope.lang.title ='Index Page';
    $scope.lang.where = 'Where';
    $scope.lang.when = 'When';
    $scope.lang.searchdish = 'Search dish';
    $scope.lang.adddish = 'Add dish';

    var params = '';
    var wherevalue = $('#id-where').value;
    var whenvalue = $('#id-when').value;

    // TODO Fix this.
    if (wherevalue != undefined) {
        params = '?where=' + wherevalue;
    }
    if (whenvalue != undefined) {
        if (params != '') {
            params = params + '&when=' + whenvalue;
        } else {
            params = '?when=' + whenvalue;
        }
    }

    $scope.searchDish = function() {
        location.href = '/dishes/index.html' + params;
    };

    $scope.addDish = function() {
        location.href = '/dishes/edit.html' + params;
    };
}]);