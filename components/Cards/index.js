// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//Link back to HTML when DOM has to be attached
const cards = document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(data => {

        //Storing the required data into local variable
        const articles = data.data.articles

        //Converting the data into array for easier data manipulation
        const topics = Object.entries(articles)

        //Traversing through the array and using DOM function to create elements
        for (const [topic, card] of topics) {

            card.forEach(author => { cards.appendChild(createCard(author)) })
        }

    })
    .catch(error => {
        console.log('Error with processing articles, see here ', error)
    })

function createCard(topics) {

    //Setting DOM Elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    //Setting up DOM structure to TML
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    //Setting Class names to Elements
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //Setting up content and sources for elements
    headline.textContent = topics.headline
    img.src = topics.authorPhoto
    authorName.textContent = `By ${topics.authorName}`

    return card
}