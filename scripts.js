let json = {
    "options":{
        "header": "New England",
        "description": "The northeastern region of the United States comprising the states of Maine, Vermont, New Hampshire, Massachusetts, Connecticut and Rhode Island. It's known for its Colonial past, Atlantic coastline, changing autumn foliage and forested mountains. Boston, Massachusetts, the region’s hub, pre-dates the American Revolution, and its Freedom Trail passes sites that were critical to the nation’s founding.",
    },
    "records":[
        {
            "background_image": "https://addapptation.blob.core.windows.net/pictures/nature/Vibrance.png",
            "background_color": "#d44697",
            "state": "New Hampshire",
            "description": "New Hampshire, a U.S. state in New England, is defined by its quaint towns and large expanses of wilderness.",
            "link": "https://en.wikipedia.org/wiki/New_Hampshire",
            "new_window": false,
        },
        {
            "background_image": "",
            "background_color": "#d44697",
            "state": "Maine",
            "description": "Maine, the northeasternmost U.S. state, is known for its rocky coastline, maritime history and nature areas like the granite and spruce islands of Acadia National Park.",
            "link": "https://en.wikipedia.org/wiki/Maine",
            "new_window": true,
        },
        {
            "background_image": "",
            "background_color": "#d44697",
            "state": "Vermont",
            "description": "Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested.",
            "link": "https://en.wikipedia.org/wiki/Vermont",
            "new_window": true,
        },
        {
            "background_image": "",
            "background_color": "#d44697",
            "state": "Massachusetts",
            "description": "Massachusetts, officially known as the Commonwealth of Massachusetts, is the most populous state in the New England region of the northeastern United States.",
            "link": "https://en.wikipedia.org/wiki/Massachusetts",
            "new_window": false,
        },
        {
            "background_image": "",
            "background_color": "#346a78",
            "state": "Connecticut",
            "description": "",
            "link": "https://en.wikipedia.org/wiki/Connecticut",
            "new_window": true,
        },
        {
            "background_image": "https://addapptation.blob.core.windows.net/pictures/nature/backlit.png",
            "background_color": "#d44697",
            "state": "Rhode Island",
            "description": "Rhode Island, a U.S. state in New England, is known for sandy shores and seaside Colonial towns.",
            "link": "https://en.wikipedia.org/wiki/RhodeIsland",
            "new_window": false,
        }
    ]
}
/*---------------------------------------------
Write Your Javascript Code Below
---------------------------------------------*/
//creating the title
let title = document.createElement('h1')
let tileContainer = document.getElementById('tiles-342')
title.setAttribute('id', 'title')
title.textContent = json.options.header
tileContainer.appendChild(title)

//creating the paragraph
let paragraph = document.createElement('p')
paragraph.setAttribute('id', 'paragraph')
paragraph.textContent = json.options.description
tileContainer.appendChild(paragraph)

//creating the horizontal row
let hr = document.createElement('hr')
tileContainer.appendChild(hr)

//for each loop to create tiles
let records = json.records
records.forEach(record => {
    let tileContainer = document.getElementById('tiles-342')
    let tile = document.createElement('div')
    tile.setAttribute('id', 'tiles')
    tile.textContent = record.state
    if (!record.background_image) {
        tile.style.backgroundColor = record.background_color
    } else {
        tile.style.backgroundImage = "url(" + record.background_image + ")"
    }
    tile.addEventListener("mouseover", function() {
    let description = record.description
    if (description) {
            tile.textContent = description
            tile.style.textAlign = 'center'
            tile.style.backgroundColor = 'rgba(0,0,0,0.7)'
        } 
    })
    tile.addEventListener("mouseout", function() {
        tile.textContent = record.state
        tile.style.backgroundColor = record.background_color
    })
    tile.addEventListener('click', function(){
        window.open(record.link)
    })
    tileContainer.appendChild(tile)
})




document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContent has been loaded')
})
    