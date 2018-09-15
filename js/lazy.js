"use strict"

var lazyLoadImgFunctionGenerator = function (elems, dataProps, completeAll) {
	return function(){
		elems.forEach(function(elem) {
			for(var dataProp in dataProps) { 
				dataProps[dataProp](elem.dataset[dataProp], elem);
			}
		});
		completeAll();
	}
}

function lazyLoad() {
	var lazyLoadEventImages = lazyLoadImgFunctionGenerator(Array.from(document.getElementsByClassName("events-svg")),
		{
			name: function(n, el) {
				var baseURI = "/imgs/svg-anims2/";
				console.log(1);
				console.log(baseURI + n);
				fetch(baseURI + n, {
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
					el.style.width = "100%";
					el.style.height = "100%";
				})
			}
		},
		function() {
			document.getElementById("view-events-btn").style.opacity = "1";	
			document.getElementById("next-event").style.opacity = "1";	
			document.getElementById("prev-event").style.opacity = "1";	
		}
	);
	lazyLoadEventImages();
}

lazyLoad();

