const main = document.querySelector("main");

const posts = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq-kgIqPvSVYXw0M4RjWwipnF5BT0jfr1KQ&s", title: "Accessibility", post: "The accessibility of Semantic HTML means to have easy access to changing stuff easily and reading it easily."
    },
    { image: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/public/blog/71/using-semantic-elements-to-improve-your-html-2-min.png", title: "Improvements", post: "Semantic HTML improves page structure instead of using the div tag with classes and ids to waste more time and to make it harder to read and sort through." },
    { image: "https://miro.medium.com/1*hti9zKGPH0S_7vcWktYgkQ.png", title: "Other Information", post: "As shown from the image below it shows that using semantic HTML is much cleaner and less clutered with div tags." }
];

// 3. Create a for of loop that loops through your array of objects. Using insertAdjacentHTML, post the data from the objects **in the appropriate semantic HTML tag** with the `image`, `title`, and `post`.

posts.forEach(post => {
    main.insertAdjacentHTML("beforeend", `<article>
        <h2>${post.title}</h2>
        <p>${post.post}</p>
        <img src="${post.image}">
    </article>`)
});