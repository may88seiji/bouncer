//1
function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([1, null, NaN, 2, undefined]);
//2
function bouncer(arr) {
  var i = arr.filter(function(value){ return (value); });
  return i;
}
//3
var bouncer = (function (callbackfn) {
  return function bouncer (array) {
    return array.filter(callbackfn);
}
}(function callbackfn (value) { return value; }));

bouncer([1, null, NaN, 2, undefined]);  // [1, 2]
