angular
  .module( "todoApp", ['ui.router'] )
  .config(MainRouter)

function MainRouter( $stateProvider, $urlRouterProvider) {
	// heres the routing things
	$stateProvider
		.state('home', {
			url: "",
			templateUrl: "home.html"
		})

		.state('archive', {
			url: "/archive",
			templateUrl: "archive.html"
		})

		.state('edit', {
			url: "/edit",
			templateUrl: "edit.html"
		})
}
