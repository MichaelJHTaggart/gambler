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

  async function minusOne(id) {
   const minusCoin = await coins(id) - 1
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

  async function threeWins(string) {
   if (string === "cherry") {
    const totalCoins = await coins(id)
    const c3Amount = (50 + totalCoins)
    db.winnings(c3Amount, id)
    return res.status(200).send(`${c3Amount}`)
   } else if (string === "apple") {
    const totalCoins = await coins(id)
    const a3Amount = (20 + totalCoins)
    db.winnings(a3Amount, id)
    return res.status(200).send(`${a3Amount}`)
   } else if (string === "banana") {
    const totalCoins = await coins(id)
    const b3Amount = (15 + totalCoins)
    db.winnings(b3Amount, id)
    return res.status(200).send(`${b3Amount}`)
   } else if (string === "lemon") {
    const totalCoins = await coins(id)
    const l3Amount = (3 + totalCoins)
    db.winnings(l3Amount, id)
    return res.status(200).send(`${l3Amount}`)
   }
  }

  async function twoWins(string) {
   if (string === "cherry") {
    const totalCoins = await coins(id)
    const cAmount = (40 + totalCoins)
    db.winnings(cAmount, id)
    return res.status(200).send(`${cAmount}`)
   } else if (string === "apple") {
    const totalCoins = await coins(id)
    const aAmount = (10 + totalCoins)
    db.winnings(aAmount, id)
    return res.status(200).send(`${aAmount}`)
   } else if (string === "banana") {
    const totalCoins = await coins(id)
    const bAmount = (5 + totalCoins)
    db.winnings(bAmount, id)
    return res.status(200).send(`${bAmount}`)
   } else if (string === "lemon") {
    const totalCoins = await coins(id)
    return res.status(200).send(`${totalCoins}`)
   }
  }

  if (reelOneAns === reelTwoAns && reelTwoAns === reelThreeAns) {
   await minusOne(id)
   return threeWins(reelOneAns)
  } else if (reelOneAns === reelTwoAns) {
   await minusOne(id)
   return twoWins(reelOneAns)
  } else if (reelTwoAns === reelThreeAns) {
   await minusOne(id)
   return twoWins(reelTwoAns)
  } else {
   await minusOne(id)
   totalCoins = await coins(id)
   return res.status(200).send(`${totalCoins}`)
  }
 }
}