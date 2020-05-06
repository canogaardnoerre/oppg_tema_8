

const skurker = [
  {navn: "Billy the Kid", egenskap: "Rask på avtrekkeren"},
  {navn: "Jesse James", egenskap: "Iskald"},
  {navn: "Brødrene Dalton", egenskap: "Jobber godt sammen"}
]

const skurk = skurker.find(
  skurk =>
  skurk.navn === 'Jesse James'
)

console.log(skurk.egenskap)





  