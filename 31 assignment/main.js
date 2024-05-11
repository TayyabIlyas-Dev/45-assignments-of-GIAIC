var names = ['admin', 'farhan', 'gulzar', 'faheem', 'zafar'];
names = ['admin'];
if (names.length > 0) {
    names.forEach(function (username) {
        if (username == 'admin') {
            console.log("Hello admin, would you like to see a status report?\n        ");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}
//completed..
