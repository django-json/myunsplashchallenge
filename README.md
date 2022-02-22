<!-- Please update value in the {}  -->

<h1 align="center">My Unsplash Challenge</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://myunsplashchallenge.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/django-json/myunsplashchallenge/">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![myunsplash-screenshot1](https://user-images.githubusercontent.com/44185999/154792469-992c7d32-305d-4c05-85df-54919ad1dcd4.png)
![myunsplash-screenshot2](https://user-images.githubusercontent.com/44185999/154792474-e3a5216b-1cf2-42c0-b550-e6ec5edbfd43.png)
![myunsplash-screenshot3](https://user-images.githubusercontent.com/44185999/154792477-19e5dbd9-dc08-49f3-9577-055e557521e8.png)
![myunsplash-screenshot4](https://user-images.githubusercontent.com/44185999/154792481-1b4c9fa6-d075-4b2a-9285-b818dd070ccb.png)

-   You can check the demo [here](https://myunsplashchallenge.netlify.app).
-   For the backend server source code, check [here](https://github.com/django-json/myunsplashchallenge-api).
-   This challenge is awesome! First of all, the masonry layout is the one that peaked my interest the most since this is the first time I do masonry design.

-   For the backend, this is also my first time to use MongoDB for data storage and I never knew that MongoDB structure their data like in JSON format which is easy for me to understand though I need to learn new terms and syntaxes to manipulate the data itself but it was worth it as I enjoyed learning it.

-   When I try to deploy the backend server to Vercel, I encountered errors and it took so much time and figured out that the implementation of MongoDB on Vercel is currently in development because the last implementation was deprecated so I migrated to Heroku instead and the problem was solved.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

Frontend:

-   [React](https://reactjs.org/)
-   [classnames](https://www.npmjs.com/package/classnames)
-   [react-masonry-css](https://www.npmjs.com/package/react-masonry-css)
-   [react-modal](https://www.npmjs.com/package/react-modal)

Backend:

-   [Express](https://www.npmjs.com/package/express)
-   [MongoDB](https://www.npmjs.com/package/mongodb)
-   [Multer](https://www.npmjs.com/package/multer)
-   [Helmet](https://www.npmjs.com/package/helmet)
-   [Compression](https://www.npmjs.com/package/compression)
-   [Express Validator](https://www.npmjs.com/package/express-validator)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories:

-   [x] User story: I can see a list of photos in the masonry layout that I have added
-   [x] User story: I can add a new photo to the list - the new photo should be on top of the list
-   [x] User story: I can search for photos by label
-   [x] User story: When I hover a photo, I can see a label and a delete button
-   [x] User story: I can delete images
-   [N/A] User story (optional): When I delete an image, I can enter my password

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/django-json/myunsplashchallenge

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

-   [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
-   [Node.js](https://nodejs.org/)
-   [Validating a React form upon submit](https://goshacmd.com/submit-time-validation-react/)
-   [Handling any POST data in Express](https://codex.so/handling-any-post-data-in-express)
-   [DELETE Request using Fetch in Javascript](https://codezup.com/delete-request-using-fetch-in-javascript/)
-   [Get and Post method using Fetch API](https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/#:~:text=Fetch%20also%20supports%20the%20POST,post%20content%20with%20an%20ID.)
-   [Getting ReplicaSetNoPrimary and MongoServerSelectionError error while connecting MongoDB with nodejs](https://stackoverflow.com/questions/60063820/getting-replicasetnoprimary-and-mongoserverselectionerror-error-while-connecting)
-   [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
-   [Express Validator - Sanitation](https://express-validator.github.io/docs/sanitization.html)

## Contact

-   GitHub [@django-json](https://github.com/django-json)
