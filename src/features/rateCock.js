const sendCockRate = async (ctx) => {
  const toMention = ctx.state.command.args
  const cockRates = [
    `Signor ${toMention} π£ venga qui ππ»ββοΈ, mi faccia vedere il pisello π
OrsΓΉ dunque, il pene π½, il membro π₯, il ciciniello πΆ, come lo vogliamo chiamare π¬, quello insomma
Poffarbacco signor Peppino π³, alla faccia del bicarbonato di sodio π, questo Γ¨ un pisello degno di lode π, bellissimo π€©, che lunghezza π!
E queste palle βΎοΈ, due figliole tonde π, ciacione π±, grandi, eloquenti, un piacere da vedere π!
Signor Peppino, i miei piΓΉ sinceri complimenti π, io le do un 9 su 10 e mo lo mettiamo per iscritto π!`
  ]

  const rate = cockRates[Math.floor(Math.random() * cockRates.length)]
  await ctx.reply(rate)
}
module.exports = {
  sendCockRate
}
