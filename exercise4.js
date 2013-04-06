var z1 = [390,520];
var z2 = [450,520];
var z3 = [390,470];
var z4 = [450,470];

var finestra2d = POLYLINE ([z1,z2,z4,z3,z1]);
var finestra3d = EXTRUDE([9])(finestra2d);



var fine3 = STRUCT(REPLICA(3)([finestra3d,T([1])([120])]));


DRAW(fine3);