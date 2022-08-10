let postTitle = document.querySelector('#title-input')
let postName = document.querySelector('#name-input')
let postStory = document.querySelector('#textarea')

console.log('values: ', postTitle.value, postName.value, postStory.value)

async function createPost (postTitle, name, story) {
    try {
  
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postTitle, name, story)
        }
        const response = await fetch('http://localhost:3000/posts', options);
        const { title, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `posts/${title}`
        }
    } catch (error) {
        console.log('error')
        console.warn(error)
    }
}

async function readPost () {

    try {
        const response = await fetch('http://localhost:3000/:title')
        return response;
    } catch (error) {
        console.log('Error while fetching data')
    }
}

const postForm = document.getElementById("form")


postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let title = postTitle.value
    let name = postName.value
    let story = postStory.value 
    console.log('title, name, story', title, name, story)
    await createPost(title, name, story)
    
}
)
