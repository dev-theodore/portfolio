//functions for handling max word count displayed on cards

const descriptionTrimer = (text) => {

    if (text.length > 35) {
        let sentence = text.slice(0, 35)
        let newSentence = sentence + '...'
        return newSentence
    }

    return text
}

const titleTrimer = (text) => {
    
    if (text.length > 25) {
        let sentence = text.slice(0, 25)
        let newSentence = sentence + '...'
        return newSentence
    }

    return text
}

export { descriptionTrimer, titleTrimer }