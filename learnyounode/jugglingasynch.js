var bl = require("bl")
var http = require("http")

var urls = process.argv.slice(2)
var results = []
var resultCount = 0

urls.forEach(function (url) {
	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {
			results.push(data.toString())
			resultCount++
		
			if (resultCount === urls.length) {
				results.forEach(function (result) {
					console.log(result)
				})
			}
		}))	
	})
})
