async function createPost (e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch('http://localhost:3000/posts', options);
    } catch (error) {
        console.warn(error)
    }
}

async function getAll(){
    try {
        const response = await fetch(`http://localhost:3000/posts`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}