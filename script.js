const main = document.querySelector("main");

const posts = [
    {
        image: "https://www.theedigital.com/wp-content/uploads/2023/12/01.png", title: "The Basics of Semantic HTML", post: "Semantic HTML is used for improving code structure in HTML. This form of shortening div tag classes into it's own tag makes it easier for you and other developers to read the source code on any page."
    },
    { image: "https://userpages.cs.umbc.edu/finin/talks/cikm97/img088.GIF", title: "Semantic HTML Information", post: "Advanced usages of Semantic HTML means to leverage everything you can use such as utilizing all the shortcuts to make the whole page easier to read and make it less messy. This means having a whole page using less div tags unless needed when you can't use a semantic HTML shortcut." },
    { image: "https://dotnettrickscloud.blob.core.windows.net/img/html/3720230506163626.webp", title: "Advanced Semantic HTML", post: "Semantic HTML is the practice of using HTML tags that describe the meaning or purpose of the content they contain, rather than how the content should look. This approach uses the tags shown in the Article above to clearly define the structure and role of different parts of a webpage. By utilizing these descriptive tags, developers create web content that is more accessible to assistive technologies like screen reader, which rely on the semantic strucutre to interpret and navigate page content effectively. Futhermore, semantic markup enchances search engine optimization (SEO) by providing clear signals about the pages hierarchy and important content, and it improves code maintability and readability for other developers. Adopting semantic HTML is a core principle of modern web development, ensuring a more robust, accessible, and understable web for both hunmans and machines." }
];

// 3. Create a for of loop that loops through your array of objects. Using insertAdjacentHTML, post the data from the objects **in the appropriate semantic HTML tag** with the `image`, `title`, and `post`.
