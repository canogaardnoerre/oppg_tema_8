
const ulMatretter = document.querySelector("#ulMatretter")

const matretter = ["Kapteinens favoritt", "Kjøtt utklemt i panne", "Biff Stroganof"]

matretter.map( matrett =>
   ulMatretter.innerHTML += `<li>${matrett}</li>`
)
