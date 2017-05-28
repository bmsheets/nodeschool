var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function (err, text) {
	console.log(text.split('\n').length - 1)	
})
