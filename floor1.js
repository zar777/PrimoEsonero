//piano terra


var a = [80,400];
var b = [420,400];
var c = [420,390];
var d = [170,390];
var e = [170,380];
var f = [150,380];
var g = [150,390];
var h = [80,390];

var latonord1 = POLYLINE ([a,b,c,d,e,f,g,h,a]);
//DRAW(latonord1);

/*var i = [80,330];
var l = [80,390];
var lineapil1 = POLYLINE ([i,l]);
var m = [85,325];
var n = [150,325];
var lineapil2 = POLYLINE ([m,n]);
*/

var i = [200,180];
var l = [200,195];
var m = [360,195];
var n = [360,240];
var o = [365,240];
var p = [365,180];

var latosud1 = POLYLINE([i,l,m,n,o,p,i]);

var q = [500,180];
var r = [510,180];
var s = [510,230];
var t = [500,230];

var rettsud = POLYLINE([q,r,s,t,q]);

var u = [365,270];
var v = [365,290];
var z = [375,290];
var a1 = [375,280];
var b1 = [500,280];
var c1 = [500,290];
var d1 = [510,290];
var e1 = [510,280];
var l1 = [540,280];

var parcentr1 = POLYLINE([u,v,z,a1,b1,c1,d1,e1,l1]);

var f1 = [500,270];
var g1 = [500,265];
var h1 = [540,265];

var parcentr2 = POLYLINE([u,f1,g1,h1]);

var montaggio = STRUCT([latonord1,latosud1,rettsud,parcentr1,parcentr2]);
DRAW(montaggio);