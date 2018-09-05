var colorJets=document.getElementById('colorJets');
var greyJets=document.getElementById('greyJets');
// var bus=document.getElementById('bus');

    var v=15, dir=1;
    function cir(){
        colorJets.getElementsByClassName("cls-8")[0].setAttribute("r", v);
        v+=dir;
        if(v<15) dir=1;
        if(v>28) dir=-1;
    }
    setInterval(cir,11);

    var v1=30, dir1=1;
    function cir1(){
        colorJets.getElementsByClassName("cls-8")[2].setAttribute("r", v1);
        v1+=dir1;
        if(v1<30) dir1=1;
        if(v1>40) dir1=-1;
    }
    setInterval(cir1,11);

    var v2=36, dir2=1;
    function cir2(){
        colorJets.getElementsByClassName("cls-5")[2].setAttribute("r", v2);
        v2+=dir2;
        if(v2<36) dir2=1;
        if(v2>50) dir2=-1;
    }
    setInterval(cir2,11);

    var v3=18, dir3=1;
    function cir3(){
        colorJets.getElementsByClassName("cls-7")[1].setAttribute("r", v3);
        v3+=dir3;
        if(v3<18) dir3=1;
        if(v3>34) dir3=-1;
    }
    setInterval(cir3,11);

    var v4=27, dir4=1;
    function cir4(){
        colorJets.getElementsByClassName("cls-4")[1].setAttribute("r", v4);
        v4+=dir4;
        if(v4<27) dir4=1;
        if(v4>40) dir4=-1;
    }
    setInterval(cir4,11);

    var v5=32, dir5=1;
    function cir5(){
        colorJets.getElementsByClassName("cls-6")[0].setAttribute("r", v5);
        v5+=dir5;
        if(v5<32) dir5=1;
        if(v5>50) dir5=-1;
    }
    setInterval(cir5,11);

    var v6=15, dir6=1;
    function cir6(){
        colorJets.getElementsByClassName("cls-7")[0].setAttribute("r", v6);
        v6+=dir6;
        if(v6<15) dir6=1;
        if(v6>20) dir6=-1;
    }
    setInterval(cir6,11);

    var v7=17, dir7=1;
    function cir7(){
        colorJets.getElementsByClassName("cls-5")[1].setAttribute("r", v7);
        v7+=dir7;
        if(v7<17) dir7=1;
        if(v7>35) dir7=-1;
    }
    setInterval(cir7,11);

    var v8=35, dir8=1;
    function cir8(){
        greyJets.getElementsByClassName("cls-9")[0].setAttribute("r", v8);
        v8+=dir8;
        if(v8<35) dir8=1;
        if(v8>60) dir8=-1;
    }
    setInterval(cir8,11);

    var v9=30, dir9=1;
    function cir9(){
        greyJets.getElementsByClassName("cls-9")[1].setAttribute("r", v9);
        v9+=dir9;
        if(v9<30) dir9=1;
        if(v9>50) dir9=-1;
    }
    setInterval(cir9,11);

    var vX=32, dirX=1;
    function cirX(){
        greyJets.getElementsByClassName("cls-9")[2].setAttribute("r", vX);
        vX+=dirX;
        if(vX<32) dirX=1;
        if(vX>60) dirX=-1;
    }
    setInterval(cirX,11);

