testapp
=======

lab
# Welcome to Nitrous.IO

Nitrous.IO enables you to develop web applications completely in the
cloud. This development "box" helps you write software, collaborate
real-time with friends, show off apps to teammates or clients, and
deploy apps to production hosting sites like Heroku or Google App
Engine.

## Getting Started

This box is a fully functional Linux environment in which you can
develop any Linux-based application. This box comes bundled with gcc,
make, perl and other system-level libraries, enough to get you started
on your application development journey.


## Setting up your SSH Keys

We recommend that you use Github (www.github.com) to manage your
application's code. To interact with your code on Github, you'll need to
add your Nitrous.IO box's SSH keys to Github.  Follow these steps to get
started:

http://help.nitrous.io/github-add-key/

## Installing Databases

Your box comes installed with Autoparts, with which you can install
databases such as MySQL, Redis, Postgres, Memcache and many others.
Look for the "Autoparts" menu in the IDE, or read more here:

http://help.nitrous.io/autoparts/

## Previewing your application

Once you're running a webserver, keep an eye on the port where your
server is running.  Then click the "Preview" menu title in the IDE above
and select the port where your application is running. For more
information, check out this help article:

http://help.nitrous.io/preview/

## Real-Time Collaboration

You can invite friends and teammates into this web IDE session so you
can code collaboratively on the same codebase.  This can be really
helpful when giving tutorials, troubleshooting some code, or just doing
some pair programming.  Click the "Collaborate" menu and then manage
collaborators.

http://help.nitrous.io/collab/

## Deployment

Once you've built your application, you can deploy to various
cloud services such as Heroku, Google App Engine, Nodejitsu, Azure and
others.  You can read more about it here:

http://help.nitrous.io/categories/deployment/

## Node.JS

Node.JS on this box is installed via [Autoparts](http://help.nitrous.io/autoparts/.

You can read more about running a static site here:

http://help.nitrous.io/node-connect-server/

Or deploying to Nodejitsu here:

http://help.nitrous.io/nodejitsu/



////////////////////

SERVER
------
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('New connection!');
  socket.on('disconnect', function(){
    console.log('Lost connection.');
  });
  socket.on('hello', function(data){
    console.log(data.text);
  });
});

CLIENT
------
var socket = io();

socket[.broadcast].emit('hello', {name: "Fred"});

socket.on('hello', function(data){
  console.log('Hi, '+data.name+'!');
});


Suggested Plan
==============
`$ express [appName]`
`$ cd [appName] && npm install`
edit routes/index.js
	GET `/host` renders 'host'
	GET `/client` renders 'client'
create new .jade files in views for each 'client' and 'host'
`$ npm start` to test that your views work
	go to `[yourURL]:3000/host` and `[yourURL]:3000/client`
Create `/public/javascripts/hostApp.js` and `clientApp.js`
	Use the example structure
	add `console.log()` statements to `init()` so you know they're running
Include the *App.js files in the Jade templates
Check the URLs with your console open to make sure the JS files are running
Add vote buttons to client.jade
Add click events to the vote buttons in clientApp.js that log the votes to the console
Test that that works



Final Project
#############

Requirments
===========
Express
	Sockets
	Host Route
		Start/End estimate button
		show cards & votes
		do math on votes
	Client Route
		vote options


Resources
=========
<-- That frontend structure
http://nickswider.com/example.js

Sockets
npm install socket.io
http://socket.io



/////////Starurday plan version/////////

ITI205 Final Project
####################
Due on the 15th

Requirements
============
Express
	Sockets
	Host Route
		Start/End estimate button
		show cards & votes
		do math on votes
	Client Route
		vote options


Socket Info
===========
Server Example
--------------
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('New connection!');
  socket.on('disconnect', function(){
    console.log('Lost connection.');
  });
  socket.on('hello', function(data){
    console.log(data.text);
  });
});

Client Example (ClientApp.js
--------------
var socket = io();

socket[.broadcast].emit('hello', {name: "Fred"});

socket.on('hello', function(data){
  console.log('Hi, '+data.name+'!');
});

Socket Lifecycle
----------------
Server starts
Client loads
Client: `var socket = io();`
Server: `io.on('connection'...`
Server: `console.log('New connection!');`
// User hits a button
Client: `socket[.broadcast].emit('hello', {name: "Fred"});`
Server: `socket.on('hello'...`
Server: `console.log(data.text);`
// User closes the page
Server: `socket.on('disconnect'...`

What to include
---------------
script(src='/socket.io/socket.io.js') //in layout.jade


Suggested Plan
==============
`$ express [appName]`
`$ cd [appName] && npm install`
{{ initial commit to git }}
edit routes/index.js
	GET `/host` renders 'host'
	GET `/client` renders 'client'
create new .jade files in views for each 'client' and 'host'
`$ npm start` to test that your views work
	go to `[yourURL]:3000/host` and `[yourURL]:3000/client`
Create `/public/javascripts/hostApp.js` and `clientApp.js`
	Use the example structure
	add `console.log()` statements to `init()` so you know they're running
Include the *App.js files in the Jade templates
Check the URLs with your console open to make sure the JS files are running
{{ commit to git }}
Add vote buttons to client.jade
Add click events to the vote buttons in clientApp.js that log the votes to the console
Test that they work
{{ commit to git }}
Install socket.io and add it to `www`
Replace console log in clientApp.js with Socket Emit of vote value
Listen for message on the server
Optionally store this in mongo for later data mining
Forward the value to the host from the `on` handler on the server side
Listen for it on the host and log the value
Load a host and a client in separate browser tabs and test that the vote is logged
{{ commit to git }}
Replace the console log with jQuery to add the vote to the DOM
Add a button to the host Jade template that controls the state of voting
Create a button handler that toggles the state
Only accept votes when the button is in the correct state
Add CSS to only show the values after the voting period has ended
When the votes are revealed, average them and display the value.
When vote mode is re-enabled, clear the last round's responses
{{ commit to git }}
Add a name input to the client template
Send the name with the vote from the client
Add name to your listener on the host and display it with the vote
	Name should be visible during voting so users know who they're waiting on
{{ commit to git }}


Resources
=========
This Plan
http://nickswider.com/plan.txt

Example frontend structure
http://nickswider.com/example.js

Sockets
`npm install socket.io`
http://socket.io

Email Me!
ITI205@nickswider.com
///example.js
/*
 * JavaScript Example
 * @author: swider
 */

var App = (function(win, doc, $){

	var
		// CONFIG
		containerSel = '#container',
		buttonSel = '#button',

		// PRIVATE VARIABLES
		$container,
		$button,

		// PRIVATE METHODS
		buttonHandler = function(e) {
			console.log('Button clicked!');
			e.preventDefault();
		},

		// KICK OFF
		init = function(){
			$container = $(containerSel);
			$button = $container.find(buttonSel);

			$button.on('click', buttonHandler);
		};

	// EXPOSE WHAT YOU NEED
	return {
		init: init
	}
})(window, document, jQuery);



// This would live somewhere else
$(function(){
	App.init();
});




