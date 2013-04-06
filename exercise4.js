var z1 = [390,520];
var z2 = [450,520];
var z3 = [390,470];
var z4 = [450,470];

var finestra2d = POLYLINE ([z1,z2,z4,z3,z1]);

var z5 = [390,495];
var z6 = [450,495];
var z7 = [420,520];
var z8 = [420,470];

var lineaoriz = POLYLINE ([z5,z6]);
var lineavert = POLYLINE ([z7,z8]);

var vetro = STRUCT([lineavert,lineaoriz,finestra2d]);

//DRAW(vetro);

var finestra3d = EXTRUDE([9])(vetro);

var fine3 = STRUCT(REPLICA(3)([finestra3d,T([1])([120])]));

var findoppie = STRUCT(REPLICA(2)([fine3,T([0])([60])]));

var colored = COLOR([0,0,0])(findoppie);

DRAW(colored);