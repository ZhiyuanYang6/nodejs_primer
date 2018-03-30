var isTrue = function(value, callback) {
    if (value === true) {
        callback(null, "Value was true.");
    } else {
        callback(new Error("Value is not true!"));
    }
}
var callback = function(error, value) {
    if (error) {
        return console.log(error);
    }
    console.log(value);
}
// console.log(new Error("Value is not true!"));
// isTrue(true, callback);
console.log(__filename);
// console.log(_filename);
console.log(__dirname);
// console.log("__filename");