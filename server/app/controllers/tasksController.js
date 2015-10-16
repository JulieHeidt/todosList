var Task = require('../models/Task')
// var User = require('../models/User')

function index( req, res ){
    Task.find(function( err, tasks ){
        if( err ) {
            console.log('Error: ' + err )
            res.send( err )
        } res.json( tasks )
    })
}

function create( req, res ){
	var task = new Task()
	task.content = req.body.content
	task.date = req.body.date
	task.due = req.body.due

	task.save( function( err ){
        console.log( err )
    })
    res.json( task )
}

function show( req, res ){
  task.findById( req.params.task_id, function( err, task ){
    if ( err ) {
      res.send( err )
      console.log( error )
    }
    res.json( task )
  })
}

function update (req, res){
	task.findById( req.params.task_id, function( err, task ){
		if( err )res.send( err )
		if( req.body.content ) task_id.content = req.body.content
		if( req.body.date ) task_id.date = req.body.date
		if( req.body.due ) task_id.due = req.body.due
	})
}

function destroy (req, res){
	Task.remove({
		_id: req.params.task_id
	}, function( err, user ){
		if( err ) res.send( err )
		res.json( { success: true, message: "I just destroyed that task!" } )
	})
}

module.exports = {
	index: index,
	create: create,
	Show: show,
	update: update,
	destroy: destroy
}
