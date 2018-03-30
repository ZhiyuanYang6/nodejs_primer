// try {
//     process.nextTick(function() {
//         throw new Error("error");
//     });
// } catch (err) {
//     //can not catch it
//     console.log(err);
// }
try {
    setTimeout(function() {
        throw new Error("error");
    }, 1)
} catch (err) {
    //can not catch it
    console.log(err);
}

// var txt = "";

// function message() {
//     try {
//         // adddlert("Welcome guest!");
//         process.nextTick(function() {
//             throw new Error("error");
//         });
//     } catch (err) {
//         // txt = "本页有一个错误。\n\n";
//         // txt += "错误描述：" + err.message + "\n\n";
//         // txt += "点击确定继续。\n\n";
//         console.log(txt);
//     }
// }
// message();