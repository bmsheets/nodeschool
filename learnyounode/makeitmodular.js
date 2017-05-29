var mymodule = require("./mymodule")

var file = process.argv[2]
var ext = process.argv[3]

mymodule(file, ext, function(err, data) {
	if (err) {
		return console.log(err)
	} else {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i])
		}
	}
})
