
const startLetterCapitalizer = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

const firstLettersCapitalizer = (text) => {
    let wordsArray = text.split(' ')
    let newArray = []

    for(let word of wordsArray) {
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    }

    return newArray.join(' ')
}

export { startLetterCapitalizer, firstLettersCapitalizer }