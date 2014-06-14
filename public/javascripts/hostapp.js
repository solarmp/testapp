var socket = io();
socket.on('bvote', function(data){
  console.log('Hi your name, '+data.name+'!');
  console.log('your vote, '+data.vote+'!');
  var outs = 'Hi your name, '+data.name+' '+'<br>'+'your vote, '+ data.vote +' ';
  $("#outp").html(outs);
});