var imgSet = $(".dev-img-con");
for(var i = 0; i < imgSet.length; i++){
    var target = Math.floor(Math.random() * imgSet.length -1) + 1;
    var target2 = Math.floor(Math.random() * imgSet.length -1) +1;
    imgSet.eq(target).before(imgSet.eq(target2));
}