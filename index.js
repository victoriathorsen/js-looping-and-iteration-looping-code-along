function writeCards(names) {
    let arrayNames = []
    for (let i = 0; i < names.length; i++) {
        arrayNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return arrayNames
}

function countDown(i) {
    while (i > 0) {
        console.log(i)
        i-=1
    }
    console.log(i)
}

