const { renderSync } = require("node-sass")

module.exports = {
 spin: async (req, res) => {
  const db = req.app.get('db')
  const { id } = req.session.user.id
  const [userCoins] = await db.user_coins([id])

  if (userCoins === 0) {
   return response.status(400).send('You do not have enough coins to use the slot machine!')
  }

  const reelOne = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]
  const reelTwo = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]
  const reelThree = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]

  function randomizer(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  //*Each reel answer is calculated through a randomizer function
  const reelOneAns = reelOne[randomizer(0, 7)]
  const reelTwoAns = reelTwo[randomizer(0, 7)]
  const reelThreeAns = reelThree[randomizer(0, 7)]

  function threeWins(string) {
   if (string === "cherry") {
    const newAmount = 50 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! This is the big one!')
   } else if (string === "apple") {
    const newAmount = 20 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! A bushel of apples to sweeten your day!')
   } else if (string === "banana") {
    const newAmount = 15 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! You are getting ahead of the bunch!')
   } else if (string === "lemon") {
    const newAmount = 3 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send("You WON!!! Three lemons. Actually it doesn't seem like much of a victory...")
   }
  }

  function twoWins(string) {
   if (string === "cherry") {
    const newAmount = 40 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! This is the second biggest haul!!!')
   } else if (string === "apple") {
    const newAmount = 10 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! Try to get 3 now!')
   } else if (string === "banana") {
    const newAmount = 5 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! Try to get 3 now!')
   } else if (string === "lemon") {
    const newAmount = 0 + userCoins
    db.winnings([newAmount, id])
    return res.status(200).send('You WON!!! ...but...there is no reward. Sorry :/')
   }
  }

  if (reelOneAns === reelTwoAns === reelThreeAns) {
   return threeWins(reelOneAns)
  } else if (reelOneAns === reelTwoAns) {
   return twoWins(reelOneAns)
  } else if (reelTwoAns === reelThreeAns) {
   return twoWins(reelTwoAns)
  }
 }

}