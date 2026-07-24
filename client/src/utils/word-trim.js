//functions for handling max character count displayed on cards

const descriptionTrimer = (text) => {
    text = text.length > 35 ? text.slice(0, 35) + '...' : text
    return text
}

const titleTrimer = (text) => {
    text = text.length > 25 ? text.slice(0, 25) + '...' : text
    return text
}

const shortTrimer = (text) => {
    text = text.length > 15 ? text.slice(0, 15) + '...' : text
    return text
}

export { descriptionTrimer, titleTrimer, shortTrimer }