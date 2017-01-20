//"drawing x*y board" cycle
var h=prompt('enter number of columns','');
var v=prompt('enter number of rows','');
var symbol1=prompt('enter first drawing symbol','');
var symbol2=prompt('enter second drawing symbol','');
var drawingline1=symbol1;
var drawingline2=symbol2;
for (counter_h=h-1; counter_h>0; counter_h-=2) {
  if (counter_h!=1) drawingline1+=symbol2+symbol1; else drawingline1+=symbol2;
  if (counter_h!=1) drawingline2+=symbol1+symbol2; else drawingline2+=symbol1;
  }
for (counter_v=v; counter_v>0; counter_v-=2) {
  if (counter_v!=1) {
  console.log(drawingline1);
  console.log(drawingline2);}
  else console.log(drawingline1);
  }
console.log('finished');
