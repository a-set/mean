	
	//the second parameter is used for dependencies
	var app = angular.module('MyFirstApp',['ui.router']);

	app.controller('MyController', function($scope,'posts'){
		//bind the service to scope
		$scope.posts = posts.posts;
		$scope.posts = [{title:'post1',upvotes:4},
						{title:'post2',upvotes:1},
						{title:'post3',upvotes:3},
						{title:'post4',upvotes:2},
						{title:'post5',upvotes:5}];

		$scope.addPost = function(){
			if(!$scope.title||$scope.title===''){return;}
			$scope.posts.push({title:$scope.title,link:$scope.link,upvotes:0});
			$scope.title='';
			$scope.link ='';	
		};
		$scope.incrementUpvotes= function(post){
			post.upvotes +=1;
		};
	});

	app.factory('posts',function(){
		var o = {
			posts =[];
		}
		return o;
	});
