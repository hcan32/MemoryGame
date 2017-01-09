// gulob@fulvie.com
app.factory('currency', ['$http', function($http){
	return $http.get("http://api.fixer.io/latest?base=TRY")

	
			.success(function(data){
                return data;
			})
			.error(function(error, status){
				alert(error);
				return err;
			});
	
}]);


