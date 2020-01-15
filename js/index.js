var socket = new WebSocket("ws://localhost:8080");

socket.onopen = function() {
	console.log("Connection established.");
	socket.send("Hello!");
};

socket.onclose = function(event) {
	console.log("Connection closed");
};

socket.onmessage = function(event) {
	console.log("Received message " + event.data);
};

socket.onerror = function(error) {
	console.log("Error " + error.message);
};
