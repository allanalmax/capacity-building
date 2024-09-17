// higher order functions
 // takes one or more functions as an arguments
// returns a function as the result

// forEach()
import { posts } from './posts.js';

posts.forEach((post) => {
    console.log(post);
})

// filter
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
});
console.log(filteredPosts);

// map
const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts)

// reduce
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);