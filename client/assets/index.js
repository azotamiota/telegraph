async function createPost (e) {
    e.preventdefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json();
        console.log(data)
        // const { title, err } = await response.json();
        // if(err) { 
        //     throw Error(err) 
        // } else {
        //     window.location.hash = `posts/${title}`
        // }
    } catch (error) {
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

module.exports = {
    createPost,
    readPost
}

