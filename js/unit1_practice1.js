//"drawing triangle" cycle
var counter=prompt('enter number of lines','');
var outputsymbol=prompt('enter drawing symbol','');
var drawing=outputsymbol;
while ((counter--)!==0) {
  console.log(drawing);
  drawing+=outputsymbol; }
console.log('finished');
