var h=126;
var floor0=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[1]]);

var floor1=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[-h,1]]);


var floor2=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[-h*2-1,1]]);

var floor3=STRUCT([SIMPLEX_GRID([[-80,13,-360+13,651-80-360-13],[-60,402-60],[-(h+1)*3,1]]),SIMPLEX_GRID([[-80,651-80],[-60,16,16+60-396,402-396],[-(h+1)*3,1]])]);


var floor4=STRUCT([SIMPLEX_GRID([[-80,-360,651-80-360],[-60,402-60],[-(h+1)*4,1]]),SIMPLEX_GRID([[-80,651-80],[-335,402-335],[-(h+1)*4,1]])]);

DRAW(STRUCT([floor1,floor0,floor2,floor3,floor4]));
