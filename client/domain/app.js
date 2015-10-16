angular
	.module('authApp', ['ui.router'])
	.config(MainRouter)
	.config(interceptorFunction)