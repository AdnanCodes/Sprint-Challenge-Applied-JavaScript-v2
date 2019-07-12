// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//Link back to HTML to DOM
const topics = document.querySelector('.topics')
console.log(topics)

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    
    //Required data is captured into Variable
    const captureTopics = data.data.topics
    //Then using available, DOM element is created and added to back to HTML
    captureTopics.forEach(item => topics.appendChild(TabDOM(item)))
    
})
.catch(error => {
    console.log('Error with processing, see here ', error)
})

function TabDOM(text){

    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = text

    return tab
}