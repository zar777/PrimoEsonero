function point2D(x,y){
this.x=x;
this.y=y;}

var a=new point2D(80,60)
var b=new point2D(651,60)
var c=new point2D(651,402)
var d=new point2D(80,402)
var h=126;
var r=6.5;

var p1=new point2D(86,65)
var p2=new point2D(226,65)
var p3=new point2D(365,65)
var p4=new point2D(505,65)
var p5=new point2D(644,65)
var P5=new point2D(86,331)

var p6=new point2D(86,331)
var pq=new point2D(160,331)
var q7=new point2D(86,392)
var q8=new point2D(160,383)

var pil=EXTRUDE([h])(DISK(r)());
var quad=EXTRUDE([h])(T([0,1])([r,r])(SIMPLEX_GRID([[r*2],[r*2]])));

var pilla1=T([1])([p1.y])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(pil),T([0])([p3.x])(pil),T([0])([p4.x])(pil),T([0])([p5.x])(pil)]));

var pilla2=T([1])([331])(STRUCT([T([0])([160])(quad),T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));

var pilla3=T([1])([q7.y])(STRUCT([T([0,1])([160,-q7.y+q8.y])(quad),T([0])([86])(pil)]));

var pillars0=STRUCT([pilla1,pilla2,pilla3]);

var floor0=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[1]]);

var floor1=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[-h,1]]);

var pilla12=T([1,2])([p1.y,h])(STRUCT([T([0])([p1.x])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));
var pilla22=T([1,2])([331,h])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));
var pillars1=STRUCT([pilla12,pilla22]);

var pilla13=T([1,2])([p1.y,h*2])(STRUCT([T([0])([p1.x])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));
var pilla23=T([1,2])([331,h*2])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));
var pillars2=STRUCT([pilla13,pilla23]);

var floor2=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[-h*2,1]]);

var pilla14=T([1,2])([p1.y,h*3])(STRUCT([T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));
var pilla24=T([1,2])([331,h*3])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x])(quad)]));
var pillars3=STRUCT([pilla14,pilla24]);

var floor3=STRUCT([SIMPLEX_GRID([[-80,13,-360+13,651-80-360-13],[-60,402-60],[-(h+1)*3,1]]),SIMPLEX_GRID([[-80,651-80],[-60,16,16+60-396,402-396],[-(h+1)*3,1]])]);

var floor4=STRUCT([SIMPLEX_GRID([[-80,-360,651-80-360],[-60,402-60],[-(h+1)*4,1]]),SIMPLEX_GRID([[-80,651-80],[-335,402-335],[-h*4,1]])]);

var east=R([1,2])(PI/2)(SIMPLEX_GRID([[-p1.x,p5.x-p1.x],[-h,530-h],[12]]));
var north=R([0,2])(-PI/2)(SIMPLEX_GRID([[-h,530-h],[-p1.y,q7.y-p1.y],[12]]));
var south=T([0])([p5.x])(R([0,2])(-PI/2)(SIMPLEX_GRID([[-h,530-h],[-p1.y,q7.y-p1.y],[12]])));
var west=T([1])([q7.y])(R([1,2])(PI/2)(SIMPLEX_GRID([[-p1.x,p5.x-p1.x],[-h,530-h],[12]])));

depth = 2.66;
raiser = 25.0/(2*9);
step2D = SIMPLICIAL_COMPLEX([[0,0],[0,1.4+raiser],[depth,raiser],[depth,1.4+raiser]])([[0,2,1],[1,2,3]]);
step3D = MAP([S0,S2,S1])(EXTRUDE([20])(step2D));
ramp = STRUCT(REPLICA(13)([step3D,T([0,2])([depth,raiser])]));
// DRAW(ramp)


stair1 = T([0,1,2])([318,330,368])(R([0,1])(2*PI)(ramp));
stair2 = T([0,1,2])([378,330,378])(R([0,1])(2*PI)(ramp));
stair3 = T([0,1,2])([218,330,368])(R([0,1])(2*PI)(ramp));
stair = STRUCT([stair1,stair2,stair3]);
DRAW(stair);

var building=STRUCT([pillars0,pillars1,pillars2,pillars3,floor1,floor0,floor2,floor3,floor4,east,north,south,west,stair]);


DRAW(building);
