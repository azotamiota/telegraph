async function createPost (e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch('http://localhost:3000/posts', options);
        readPost();
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

