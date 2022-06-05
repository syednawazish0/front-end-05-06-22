let users = [
    { id: 10001, username: "john", password: "john123", email: "john@gmail.com" },
    { id: 10002, username: "mike", password: "mike123", email: "mike@gmail.com" },
    { id: 10003, username: "will", password: "will123", email: "will@gmail.com" },
    { id: 10004, username: "david", password: "david123", email: "david@gmail.com" },
    { id: 10005100, username: "ava", password: "ava123", email: "ava@gmail.com" }
]

function findById() {
    let id = prompt("Enter user id : ");
    for (const user of users) {
        if (user.id == id) {
            console.log(user);
        }
    }
}

findById();