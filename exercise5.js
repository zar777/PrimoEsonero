depth = 2.66;
raiser = 25.0/(2*9);
step2D = SIMPLICIAL_COMPLEX([[0,0],[0,1.4+raiser],[depth,raiser],[depth,1.4+raiser]])([[0,2,1],[1,2,3]]);
step3D = MAP([S0,S2,S1])(EXTRUDE([20])(step2D));
ramp = STRUCT(REPLICA(13)([step3D,T([0,2])([depth,raiser])]));
// DRAW(ramp)


stair1 = T([0,1,2])([318,330,368])(R([0,1])(2*PI)(ramp));
stair2 = T([0,1,2])([378,330,378])(R([0,1])(2*PI)(ramp));
stair3 = T([0,1,2])([318,330,318])(R([0,1])(2*PI)(ramp));
stair = STRUCT([stair1,stair2,stair3]);
DRAW(stair);