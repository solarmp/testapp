var socket = io();


 // socket[.broadcast].emit('vote', {name: req.body.user});
socket.on('resphoser', function(data){
 // console.log('Hi your name, '+data.name+'!');
  //console.log('your vote, '+data.vote+'!');
});
$(function(){
$("#cl").on('submit',function(e){
  
  e.preventDefault();

  socket.emit('vote', {name: $("#user").val(), vote: $("#vote").val()});
  console.log($("#user").val());
  console.log($("#vote").val());
  
});

});