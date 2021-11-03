for (var i = 1; i <= 100; i++) {
    var count = 0;
    for (var j = 1; j <= i; j++) {
        i % j === 0 && count++;
    }
    count === 2 && console.log(i + 'tub son');

}

var str = 'WebBrain AcAdemy'.repeat(5);

var a = 0;
var b = 0;
for (var i = 0; i <= str.length; i++) {
    (str[i] === 'a' || str[i] === 'A') && a++;
    (str[i] === 'b' || str[i] === 'B') && b++;
    console.log(str[i]);
}
console.log(a, " ", b)

var newStr = '';
var str2 = 'WebBrainAcademy';
for (var i = 0; i < str2.length; i++) {
    str2[i] === str2[i].toUpperCase() ? (newStr += ` ${str2[i]}`) : (newStr += str2[i]);
}
console.log(newStr.trim())
var simple = '546';
var reverseN = '';
for (i = simple.length-1; i >= 0; i--) {
    reverseN += simple[i];
}
simple !== reverseN && console.log(reverseN + simple);

