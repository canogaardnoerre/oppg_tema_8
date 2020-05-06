const tallene = [5, 10, 25, 30, 45, 50, 65, 70, 85, 90]

console.log(tallene)

const mellomTall = tallene.filter( 
    tall => (tall > 20) && (tall < 80)
)

if(mellomTall.length === 0) {
    console.log('Oi! Ingen tall mellom 20 og 80!')
}
else if(mellomTall.length === tallene.length) {
    console.log('Oi! Alle tallene var mellom 20 og 80!')
}
else {
    console.log('Disse tallene var større enn 20 og mindre enn 80: ' + mellomTall)
}


  