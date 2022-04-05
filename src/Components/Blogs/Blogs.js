import React from "react";

const Blogs = () => {
  return (
    <section>
      <div>
        <h1>What is context api</h1>
        <p>
          Context api is a react structure that provides a way to pass data
          through the Component tree without having to pass prop-drilling from
          all levels of your application.Context is designed to share data that
          can be considered “global” for a tree of React components, such as the
          current authenticated user, theme, or preferred language. It is a
          much-needed assistant, helping readers define unknown words and make
          sense of outside information. In writing, it is often necessary to
          provide new words, concepts and information to help develop a thought.
        </p>
      </div>
      <div>
        <h1>What is semantic tag</h1>
        <p>
          HTML5 semantic tags help structure the code we create, making it more
          readable and easier to maintain. Semantic elements have meaningful
          names which tells about type of content. They help us think about the
          structure of our dynamic data, and to choose titles' hierarchy
          properly.A semantic element clearly describes its meaning to both the
          browser and the developer.HTML 5 introduced new semantic elements such
          as section , Header, main article , footer , progress , nav , aside ,
          mark , and time .
        </p>
      </div>
    </section>
  );
};

export default Blogs;
