

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



let active_users: string[] = ['ali', 'zohaib', 'sana']

let new_user: string[] = ['sana', 'ali', 'farhan', 'taha']

for (let i = 0; i < new_user.length; i++) {

    let newUserLower = new_user[i].toLowerCase();
    let usernameTaken = false

    for (let a = 0; a < active_users.length; a++) {
        let activeUsersLower = active_users[a].toLowerCase()

        if (newUserLower === activeUsersLower) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log(`Sorry, the username '${new_user[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user[i]}' is available.`);
    }
}

// completed.