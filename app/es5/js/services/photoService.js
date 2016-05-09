/**
 * @description [请求照片数据]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
app.factory('photos', ['$http', function($http) {
    return $http.get('data/photos.json')
    .success(function(data) {
        return data;
    })
    .error(function(data) {
        return data;
    });
}]);
