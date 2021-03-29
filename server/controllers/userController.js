// const { renderSync } = require("node-sass")

//Reconsider
// module.exports = {
//   spin: async (req, res) => {
//     const db = req.app.get('db')
//     const { id } = req.session.user.id
//     const [userCoins] = await db.user_coins([id])
//     let [winnerCherryThree] = await db.cherry_three()
//     let [winnerLemonThree] = await db.lemon_three()
//     let [winnerAppleThree] = await db.apple_three()
//     let [winnerBananaThree] = await db.banana_three()
//     const cherry = "cherry"
//     const lemon = "lemon"
//     const apple = "apple"
//     const banana = "banana"

//     if (userCoins === 0) {
//       return response.status(400).send('You do not have enough coins to use the slot machine!')
//     }

//     const reelOne = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]
//     const reelTwo = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]
//     const reelThree = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]

//     function randomizer(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//     }

//     const reelOneAns = reelOne[randomizer(0, 7)]
//     const reelTwoAns = reelTwo[randomizer(0, 7)]
//     const reelThreeAns = reelThree[randomizer(0, 7)]
//     //*Each reel answer will be calculated through a randomizer function

//     const answers = [reelOneAns, reelTwoAns, reelThreeAns]

//     function determineWinner(array) {
//       if (array[0] === array[1]) {
//         if (array[0] === array[2]) {
//           if (array[0])
//             //const [winner] = db[array[0] + "_three"]()

//             if (array[0] === cherry) {
//               db.add_coins(winnerCherryThree)
//               res.status(200).send("Winner! 3-in-a-row!")
//             } else if (array[0] === lemon) {
//               db.add_coins(winnerLemonThree)
//               res.status(200).send("Winner! 3-in-a-row!")
//             } else if (array[0] === apple) {
//               db.add_coins(winnerAppleThree)
//               res.status(200).send("Winner! 3-in-a-row!")
//             } else if (array[0] === banana) {
//               db.add_coins(winnerBananaThree)
//               res.status(200).send("Winner! 3-in-a-row!")
//             }
//         } else {
//           if (array[0] === array[1]) {
//             if (array[0] === array[2]) {
//               const cherry = "cherry"
//               const lemon = "lemon"
//               const apple = "apple"
//               const banana = "banana"

//               if (array[0] === cherry) {
//                 db.add_coins(winnerCherryThree)
//                 res.status(200).send("Winner! 3-in-a-row!")
//               } else if (array[0] === lemon) {
//                 db.add_coins(winnerLemonThree)
//                 res.status(200).send("Winner! 3-in-a-row!")
//               } else if (array[0] === apple) {
//                 db.add_coins(winnerAppleThree)
//                 res.status(200).send("Winner! 3-in-a-row!")
//               } else if (array[0] === banana) {
//                 db.add_coins(winnerBananaThree)
//                 res.status(200).send("Winner! 3-in-a-row!")
//               }
//               return res.status(200).send("Winner! 2-in-a-row!")

//               //If you won 2 in a row, what needs to happen next?
//               //TODO Find out which of the four variables won ("lemon", "apple", "cherry", "banana")
//               //TODO Call the appropriate sql to pull the winnings
//               //TODO Put the winnings received into the account of the winner
//             }
//           } else if (array[1] === array[2]) {
//             return res.status(200).send("Winner! 2-in-a-row!")

//             //If you won 2 in a row, what needs to happen next?
//             //TODO Find out which of the four variables won ("lemon", "apple", "cherry", "banana")
//             //TODO Call the appropriate sql to pull the winnings
//             //TODO Put the winnings received into the account of the winner
//           } else {
//             return res.status(200).send("We're sorry, you lost! Try again!")
//           }
//         }

//         determineWinner(answers);


//         // //It must determine whether index 0 is the same as index 1
//         // //If Yes, it must now determine if index 0 is the same as index 2
//         // //If No, return (winner) **2 in a row (next to each other)
//         // //If Yes, return (winner) **3 in a row 
//         // //If No, It must determine whether index 1 is the same as index 2
//         // //If Yes, return (winner) **2 in a row (next to each other)
//         // //If No, It returns (loser)



//         // // If you won 3 in a row, what needs to happen next?
//         // // TODO Find out which of the four variables won ("lemon", "apple", "cherry", "banana")
//         // // TODO Call the appropriate sql to pull the winnings
//         // // TODO Put the winnings received into the account of the winner
//         // // If you won 2 in a row, what needs to happen next?
//         // // TODO Find out which of the four variables won ("lemon", "apple", "cherry", "banana")
//         // // TODO Call the appropriate sql to pull the winnings
//         // // TODO Put the winnings received into the account of the winner
//       }
//     }
//   }
// }