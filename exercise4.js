function arc(alpha,r,R){
var domain = DOMAIN([[0,alpha],[r,R]])([36,50]);
var mapping=function(v){
var a=v[0];
var r=v[1];
return[r*COS(a),r*SIN(a)]}
var model=MAP(mapping)(domain);
return model;
}
DRAW(arc(PI,53.5,66.5));
