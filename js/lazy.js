"use strict"

var lazyLoadGenerator = function (elems, dataProps) {
	return function(){
		elems.forEach(function(elem) {
			for(var dataProp in dataProps) { 
				dataProps[dataProp](elem.dataset[dataProp], elem);
			}
		});
	}
}

function lazyLoad() {
	var lazyLoadeventImages = lazyLoadGenerator(Array.from(document.getElementsByClassName("events-svg")),
		{
			url: function(u, el) {
				console.log(1);
				fetch('http://i.imgur.com/qY1nKlP.png', {
					method: 'get',
				}).then(function(res){
					console.log(2);
					return res.blob()
				}).then(function(data){
					console.log(3);
					console.log(data);
					var objectURL = URL.createObjectURL(data);
					console.log(objectURL + "Hello");
					el.setAttribute("data", objectURL);	
					el.setAttribute("type", "image/png");
				})
			}
		}
	);
	lazyLoadeventImages();
}

lazyLoad();

