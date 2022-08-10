class Post {
    constructor(data){
        this.title = data.title;
        this.name = data.name;
        this.story = data.story;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const postData = await db.query('SELECT * FROM posts');
                const posts = postData.rows.map(b => new Post(b));
                resolve (posts);
            } catch (err) {
                reject('Posts were not found');
            }
        });
    };

    
    
    static async create(postData){
        return new Promise (async (resolve, reject) => {
            try {
                const newPost = await db.query('INSERT INTO posts (title, name, story) VALUES ($1, $2, $3) RETURNING*;', [ postData.title, postData.name, postData.story ])
            const post = new Post(newPost.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post could not be created')
            }
        })
    };
}

module.exports = Post;
