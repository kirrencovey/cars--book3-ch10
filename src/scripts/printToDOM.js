const printToDOM = (whatHTMLToPrint, whereToPrint) => {
    const itGoesHere = document.querySelector(whereToPrint)
    itGoesHere.innerHTML += whatHTMLToPrint
}


export default printToDOM