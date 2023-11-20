import React from 'react';

const BlogPostDetail = () => {
  // Sample blog post data
  const blogPost = {
    title: 'Exploring Street Food in Mumbai',
    author: 'John Doe',
    date: 'October 12, 2023',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, lectus ut fringilla congue, metus justo cursus lectus, sit amet blandit neque ex nec libero.
      // Add the full blog post content here
    `,
  };

  return (
    <div>
      <header>
        <h1>{blogPost.title}</h1>
        <p>Author: {blogPost.author}</p>
        <p>Date: {blogPost.date}</p>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </main>
    </div>
  );
};

export default BlogPostDetail;
