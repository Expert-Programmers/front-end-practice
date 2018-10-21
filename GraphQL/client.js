const sides = 6;
const query = `{
  getDie(numSides: 6) {
    rollOnce,
    roll(numRolls: 3)
  }
}`;

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ query, variables: { sides } })
})
  .then(r => r.json())
  .then(data => console.log(data));
