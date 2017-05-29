var fs = require('fs')
var path = require('path')

module.exports = function (file, ext, callback) {
	fs.readdir(file, function (err, data) {
		if (err) { 
			callback(err, null)
		} else {
			var extension = "." + ext
			var filteredLines = []
			data.forEach(function (line) {
				if (path.extname(line) === extension)	{
					filteredLines.push(line)
				}
			})	
			callback(null, filteredLines)
		}	
	})
}
