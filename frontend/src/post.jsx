import {useState } from 'react';
import './post.css';

function postPage() {
  return (
    <>
      <body>
        <header>
          <a href="home 2.html">Project Alexandria</a>
          <a href="library.html">Library</a>
          <a href="post.html">Post</a>
          <a href="feedback.html">Feedback</a>
          <a href="login/signup.html">Login/signup</a>
        </header>
        <main>
          <div class="post-container">
            <textarea placeholder="Write a question..."></textarea>
            <button>Post</button>
          </div>
        </main>
        <footer>
          <p>coded by Promit, Kazi, Naziba and Hritik.</p>
        </footer>
      </body>
    </>
  )

}