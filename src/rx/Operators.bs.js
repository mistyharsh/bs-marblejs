// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Operators from "rxjs/operators";

function repeat($staropt$star, stream) {
  var count = $staropt$star !== undefined ? $staropt$star : -1;
  return Curry._1(Operators.repeat(count), stream);
}

export {
  repeat ,
  
}
/* rxjs/operators Not a pure module */
