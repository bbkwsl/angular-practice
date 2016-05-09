/**
 * @description [几款运动app]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
app.factory('appInfoService', ['$http', function($http) {
    return $http.get('data/appInfo.json')
    .success(function(data) {
        return data;
    })
    .error(function(err) {
        return err;
    });
}]);
