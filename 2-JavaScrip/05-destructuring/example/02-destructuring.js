// example 2
const user = {
  username: "testing",
};

const { username, email = "testing@example.com" } = user;
console.log(`${username}, ${email}`);
// Output : testing, testing@example.com
