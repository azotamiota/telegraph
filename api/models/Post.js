const db = require('../dbConfig/init')

class Post {

    constructor(data){
        this.title = data.title;
        this.name = data.name;
        this.story = data.story;
    };

    static async show(title){
        return new Promise (async (resolve, reject) => {
            try {
                const postData = await db.query('SELECT * FROM posts WHERE posts.title = $1;', [ title ]);
                const post = postData.rows.map(b => new Post(b));
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };
    
    static async create(title, name, story){
        return new Promise (async (resolve, reject) => {
            try {
                console.log('I am in create async function')
                const date = new Date()
                const newPost = await db.query('INSERT INTO posts (title, name, story, date) VALUES ($1, $2, $3, $4) RETURNING*;', [ title, name, story, date])
                console.log('newPost in the POST.js model here: ', newPost);
                const post = new Post(newPost.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post could not be created')
            }
        })
    };
    
}

module.exports = Post;
