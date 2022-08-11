import { createPost } from './index.js'

// const submitButton = document.getElementById('Publish')

// submitButton.addEventListener('click', createPost)

const postForm = document.getElementById("form")
postForm.onsubmit = createPost
