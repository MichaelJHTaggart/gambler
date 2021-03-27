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

    const reelOneAns = reelOne[randomizer(0, 7)]
    const reelTwoAns = reelTwo[randomizer(0, 7)]
    const reelThreeAns = reelThree[randomizer(0, 7)]
    //*Each reel answer will be calculated through a randomizer function

    console.log(reelOneAns);

    const answers = [reelOneAns, reelTwoAns, reelThreeAns]

    const coinsWon = answers.forEach(function (element) {
      let countOfCherry = 0 //searching for "cherry"
      let countOfLemon = 0 //searching for "lemon"
      let countOfApple = 0 //searching for "apple"
      let countOfBanana = 0 //searching for "banana"

      let answers = 0

      if (element === "cherry") {
        countOfCherry++
      } else if (element === "lemon") {
        countOfLemon++
      } else if (element === "apple") {
        countOfApple++
      } else if (element === "banana") {
        countOfBanana++
      };

      if (countOfCherry === 3) {
        return answers = 50
      } else if (countOfCherry === 2) {
        return answers = 40
      } else if (countOfApple === 3) {
        return answers = 20
      } else if (countOfApple === 2) {
        return answers = 10
      } else if (countOfBanana === 3) {
        return answers = 15
      } else if (countOfBanana === 2) {
        return answers = 5
      } else if (countOfLemon === 3) {
        return answers = 3
      };
      return answers
    })



    if (coinsWon) {
      await db.add_coins(coinsWon)
      return res.status(200).send('You Won!!!')
    }
  }

  //Another way to do this would be if we said IF there are 2 or more words that are exactly the same, return Winner!

}