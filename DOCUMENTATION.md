# Bootcamp Booster

This document explains the functionality and how to use Bootcamp Booster.

## Introduction

Bootcamp Booster is a resources tool for School of Code bootcampers, designed to lessen the load of finding quality documents and tutorials related to a chosen area of study.

Bootcamp is a fast-paced, tough place to be! With so much to learn and only so many hours in a day, this app aims to help improve a bootcamper's ability to study, with curated resources that cut-down the time spent searching for help.

## Environment Variables

To run this project, you'll need to add the following environment variables to your .env file:

`PGUSER`

`PGHOST`

`PGDATABASE`

`PGPASSWORD`

`PGPORT`

## Run Locally

Clone the project - you will need to clone both frontend and backend separately!

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-room-22-team-hydrate
```

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-room-22-team-hydrate
```

Go to the project directory - to run both frontend and backend, use separate terminals to navigate into each individually

```bash
  cd w9_backend-project-room-22-team-hydrate
```

```bash
  cd w9_frontend-project-room-22-team-hydrate
```

Install dependencies in both terminals

```bash
  npm install
```

Start the backend server and React frontend in their respective terminals

```bash
  npm start
```

## Component Tree:

    -App.js

        -HomePage.js

            -CssTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

            -HtmlTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

            -ReactTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

            -UiuxTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

        -ErrorPage

## Searching a topic - the app's functionality

A bootcamper will land on the homepage and select a topic, the pages for which are managed with React Router:

```js
import { useNavigate } from "react-router-dom";
```

```js
<button
  className="topic-button"
  role="button"
  onClick={() => {
    navigate("/html");
  }}
>
  <img className="topic-pic" src={HtmlButton} alt="html button" />
</button>
```

This then sends a fetch request...:

```js
const fetchItems = async () => {
  const response = await fetch("http://localhost:3000/resources/CSS");
  const data = await response.json();
  //console.log(data);
  setTopicState(data.payload);
};
```

...which then sends a GET request from the Express server:

```js
resourcesRoute.get("/:id", async function(req, res) {
  const resourcesID = req.params.id;
  console.log(resourcesID);
  let resources = await getTopicResources(resourcesID);

  const resourcesIdObject = {
    success: true,
    payload: resources,
  };

  res.json(resourcesIdObject);
});
```

The function getTopicResources is kept within the models folder, to separate the logic for communicating with the database.

```js
export async function getTopicResources(topic) {
  const result = await query(`SELECT * FROM resources WHERE topic=$1;`, [
    topic,
  ]);
  return result.rows;
}
```

The response is what we set as the state in the React app, using setState (here named setTopicState) from the useState hook:

```js
import React, { useState, useEffect } from "react";
```

Because the resource links need to show on the screen as the topic page loads, we use the useEffect hook to have the function called on the initial page render:

```js
useEffect(() => {
  fetchItems();
}, []);
```
