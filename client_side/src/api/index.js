import axios from 'axios' // Axios library is a popular JavaScript library that simplifies making HTTP requests from a web application to a server.

const url = "https://localhost:5000/posts"

export const fetchPosts = () => axios.get(url) // When using the export default statement, you should export a named function rather than combining it with a function declaration. 