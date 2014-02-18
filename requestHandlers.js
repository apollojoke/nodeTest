var exec = require("child_process").exec;

function start(){
	console.log("Request handler 'start' was called.");
	return "empty";

	exec("find /", function(error, stdout, stderr){
		content = stdout;
	});

	return content;
}

function upload(){
	console.log("Request handler 'upload' was called.");
	return "hello upload"
}

function icon() {
    return "no icon";
}

exports.start = start;
exports.upload = upload;
exports.icon = icon;