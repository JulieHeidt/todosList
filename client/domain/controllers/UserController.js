angular.module('authApp')

.controller('MainController', MainController)

MainController.$inject = ['authFactory']

function MainController( authFactory ){
	var vm = this
	vm.user = {}
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser
	vm.loggedIn = false

	function logout(){
		console.log('logging out')
		authFactory.logout()
	}

	function getUser(){
		console.log('I"m trying to get the current user')
		authFactory.getUser()
		.then(function( response ){
			console.log( response )
		})
	}

	function signup(){
		console.log('I should be making a post request to api/users to make a new user with these params', vm.user, ' then automatically logging in')
		authFactory.signup(vm.user.username, vm.user.password)
		.then(function( response ){
			if(response.data.success){
				vm.login()
			} else {
				vm.error = response.data.message
			}
		})
	}

	function login(){
		console.log('I should be getting a JWT from api/authenticate with these params: ', vm.user)
		authFactory.login( vm.user.username, vm.user.password )
		.then(function( response ){
			if(response.data.success){
				console.log("You are logged in!")
			} else {
				vm.error = response
			}
		})
	}

}
