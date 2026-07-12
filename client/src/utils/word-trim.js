//functions for handling max word count displayed on cards

const descriptionTrimer = (text) => {
    text = text.length > 35 ? text.slice(0, 35) + '...' : text
    return text
}

const titleTrimer = (text) => {
    text = text.length > 25 ? text.slice(0, 25) + '...' : text
    return text
}

export { descriptionTrimer, titleTrimer }