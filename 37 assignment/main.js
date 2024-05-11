// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message
function make_shirt(text, size) {
    if (size === void 0) { size = 'Large'; }
    console.log("A ".concat(size, " shirt will be printed with the message: ").concat(text, "."));
}
make_shirt('I love Typescript');
function make_shirt1(text, size) {
    if (size === void 0) { size = 'Medium'; }
    console.log("A ".concat(size, " shirt will be printed with the message: ").concat(text, "."));
}
make_shirt1('I love Typescript');
function make_shirt2(text, size) {
    console.log("A ".concat(size, " shirt will be printed with the message: ").concat(text, "."));
}
make_shirt2('CodeWithUstad', 'xxl');
// completed.
