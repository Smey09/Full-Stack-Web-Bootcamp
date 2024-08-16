var Numeric;
(function (Numeric) {
  Numeric[(Numeric["Value_1"] = 0)] = "Value_1";
  Numeric[(Numeric["Value_2"] = 1)] = "Value_2";
  Numeric[(Numeric["Value_3"] = 2)] = "Value_3"; // Defaults to 2
})(Numeric || (Numeric = {}));
var StringEnum;
(function (StringEnum) {
  StringEnum["Value1"] = "Value1";
  StringEnum["Value2"] = "Value2";
  StringEnum["Value3"] = "Value3";
})(StringEnum || (StringEnum = {}));
var Heterogeneous;
(function (Heterogeneous) {
  Heterogeneous[(Heterogeneous["NumericValue"] = 1)] = "NumericValue";
  Heterogeneous["StringValue"] = "String";
})(Heterogeneous || (Heterogeneous = {}));
console.log(Numeric);
console.log(StringEnum);
console.log(Heterogeneous);
