app.controller('GameController', ['$scope','$timeout',function($scope,$timeout){
		

		$scope.images = [
			"images/c3po.jpg",
			"images/hansolo.jpg",
			"images/luke.jpg",
			"images/maul.jpg",
			"images/r2d2.jpg",
			"images/sidious.jpg",
			"images/vader.jpg",
			"images/yoda.jpg",

		];

		$scope.gameBoard = [];
		$scope.turnBoard = [];
		$scope.turnNum = 0;
		$scope.choices = [];
		$scope.win = 0;

		$scope.initGame = function(){
			$scope.turnNum = 0;
			$scope.choices = [];
			$scope.win = 0;
			$scope.turnBoard = $scope.images.concat($scope.images);	
			$scope.gameBoard[0] = "images/main.jpeg";
			for (var i = $scope.turnBoard.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = $scope.turnBoard[i];
		        $scope.turnBoard[i] = $scope.turnBoard[j];
		        $scope.turnBoard[j] = temp;
		        $scope.gameBoard[i] = "images/main.jpeg";
		    }
		    //$scope.turnBoard = $scope.turnBoard.concat($scope.gameBoard);
		};



	
		$scope.checkMove = function(){
			return ( $scope.gameBoard[$scope.choices[0]] === $scope.gameBoard[$scope.choices[1]] );
		}


		$scope.turn = function(index){
			var pos = $scope.gameBoard[index].indexOf("main");
			if(pos !== -1 ){
				$scope.choices.push(index);
				$scope.gameBoard[index] = $scope.turnBoard[index] ;
				$scope.turnNum++;
				if($scope.turnNum === 2){
					var clear = function(){
							if($scope.checkMove() === false){
								$scope.gameBoard[$scope.choices[0]] = "images/main.jpeg";
								$scope.gameBoard[$scope.choices[1]] = "images/main.jpeg";
							}else{
								$scope.win++;
							}

							if($scope.win === 8){
								alert("You win!");
								$scope.initGame();
							}
							$scope.turnNum  = 0;
							$scope.choices = [];
					};
					$timeout(clear,500);
				}
			}
		}

	}

])