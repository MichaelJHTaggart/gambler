module.exports = {
 spin: async (req, res) => {
  const db = req.app.get('db')
  const id = req.session.user.id

  async function coins(id) {
   const coinTotal = await db.coin_count(id)
   const coinCount = parseInt(coinTotal[0].coins)
   return coinCount
  }

  if (coins(id) === 0) {
   return response.status(400).send('You do not have enough coins to use the slot machine!')
  }

  function minusOne(id) {
   const minusCoin = coins(id) - 1
   console.log(minusCoin)
   db.spin_cost(minusCoin, id)
  }

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
    const totalCoins = coins(id)
    const c3Amount = (50 + totalCoins)
    db.winnings(c3Amount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! This is the big one! Your coin count is: ${c3Amount}`)
   } else if (string === "apple") {
    const totalCoins = coins(id)
    const a3Amount = (20 + totalCoins)
    db.winnings(a3Amount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! A bushel of apples to sweeten your day! Your coin count is: ${a3Amount}`)
   } else if (string === "banana") {
    const totalCoins = coins(id)
    const b3Amount = (15 + totalCoins)
    minusOne(id)
    db.winnings(b3Amount, id)
    return res.status(200).send(`You WON!!! You are getting ahead of the bunch! Your coin count is: ${b3Amount}`)
   } else if (string === "lemon") {
    const totalCoins = coins(id)
    const l3Amount = (3 + totalCoins)
    db.winnings(l3Amount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! Three lemons. Actually it doesn't seem like much of a victory... Your coin count is: ${l3Amount}`)
   }
  }

  function twoWins(string) {
   if (string === "cherry") {
    const totalCoins = coins(id)
    const cAmount = (40 + totalCoins)
    db.winnings(cAmount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! This is the second biggest haul!!! Your coin count is: ${cAmount}`)
   } else if (string === "apple") {
    const totalCoins = coins(id)
    const aAmount = (10 + totalCoins)
    db.winnings(aAmount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! Try to get 3 now! Your coin count is: ${aAmount}`)
   } else if (string === "banana") {
    const totalCoins = coins(id)
    const bAmount = (5 + totalCoins)
    db.winnings(bAmount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! Try to get 3 now! Your coin count is: ${bAmount}`)
   } else if (string === "lemon") {
    const totalCoins = coins(id)
    const lAmount = (0 + totalCoins)
    db.winnings(lAmount, id)
    minusOne(id)
    return res.status(200).send(`You WON!!! ...but...there is no reward. Sorry :/ Your coin count is: ${lAmount}`)
   }
  }

  if (reelOneAns === reelTwoAns && reelTwoAns === reelThreeAns) {
   return threeWins(reelOneAns)
  } else if (reelOneAns === reelTwoAns) {
   return twoWins(reelOneAns)
  } else if (reelTwoAns === reelThreeAns) {
   return twoWins(reelTwoAns)
  } else {
   minusOne(id)
   return res.status(200).send(`Sorry, not a winner yet. Try again! ${req.session.user.coins}`)
  }
 }
}