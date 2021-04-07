module.exports = {
 spin: async (req, res) => {
  const db = req.app.get('db')
  const id = req.session.user.id
  const coins = Number(req.session.user.coins)

  if (coins === 0) {
   return response.status(400).send('You do not have enough coins to use the slot machine!')
  }

  function minusOne() {
   const anAmount = (coins - 1)
   db.spin_cost(anAmount, req.session.user.id)
  }

  minusOne()

  const reelOne = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]
  const reelTwo = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]
  const reelThree = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]

  function randomizer(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  // //*Each reel answer is calculated through a randomizer function
  const reelOneAns = reelOne[randomizer(0, 7)]
  const reelTwoAns = reelTwo[randomizer(0, 7)]
  const reelThreeAns = reelThree[randomizer(0, 7)]

  function threeWins(string) {
   if (string === "cherry") {
    const c3Amount = (50 + coins)
    db.winnings(c3Amount, id)
    return res.status(200).send('You WON!!! This is the big one!')
   } else if (string === "apple") {
    const a3Amount = (20 + coins)
    db.winnings(a3Amount, id)
    return res.status(200).send('You WON!!! A bushel of apples to sweeten your day!')
   } else if (string === "banana") {
    const b3Amount = (15 + coins)
    db.winnings(b3Amount, id)
    return res.status(200).send('You WON!!! You are getting ahead of the bunch!')
   } else if (string === "lemon") {
    const l3Amount = (3 + coins)
    db.winnings(l3Amount, id)
    return res.status(200).send("You WON!!! Three lemons. Actually it doesn't seem like much of a victory...")
   }
  }

  function twoWins(string) {
   if (string === "cherry") {
    const cAmount = (40 + coins)
    db.winnings(cAmount, id)
    return res.status(200).send('You WON!!! This is the second biggest haul!!!')
   } else if (string === "apple") {
    const aAmount = (10 + coins)
    db.winnings(aAmount, id)
    return res.status(200).send('You WON!!! Try to get 3 now!')
   } else if (string === "banana") {
    const bAmount = (5 + coins)
    db.winnings(bAmount, id)
    return res.status(200).send('You WON!!! Try to get 3 now!')
   } else if (string === "lemon") {
    const lAmount = (0 + coins)
    db.winnings(lAmount, id)
    return res.status(200).send('You WON!!! ...but...there is no reward. Sorry :/')
   }
  }

  if (reelOneAns === reelTwoAns && reelTwoAns === reelThreeAns) {
   return threeWins(reelOneAns)
  } else if (reelOneAns === reelTwoAns) {
   return twoWins(reelOneAns)
  } else if (reelTwoAns === reelThreeAns) {
   return twoWins(reelTwoAns)
  } else {
   return res.status(200).send('Sorry, not a winner yet. Try again!')
  }
 }

}