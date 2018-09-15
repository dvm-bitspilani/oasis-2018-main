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
					headers: {
						'Content-Type': 'image/svg+xml'
					}
				}).then(function(res){
					console.log(2);
					res.blob()
				}).then(function(data){
					console.log(3);
					var objectURL = URL.createObjectURL(data);
					console.log(objectURL);
					el.setAttribute("data", objectURL);	
					el.setAttribute("type", "image/png");
				})
			}
		}
	);
	lazyLoadeventImages();
}

lazyLoad();

