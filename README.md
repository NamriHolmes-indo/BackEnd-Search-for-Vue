# BackEnd Search for Vue

This is the **Node.js + Express** backend for Task A — Mini Full-Stack Search, which can be accessed from this [link](https://github.com/NamriHolmes-indo/Dev_Naufal-Ammar-Badri_TaskAFrontEnd.git).
The backend provides a simple search endpoint that reads data from a local faqs.json file and returns the top 3 results based on keyword relevance scoring.

This backend is used by a React frontend (Vite + SCSS) in a small full-stack project.

## Tech Stack

- Node.js
- Express.js
- CORS

Local JSON Dataset (data/faqs.json)

In this case, there is no external database. However, you can expand it in the future by adding a database.

## API Endpoint

To do the test, you can do it with the Request Body below:

```bash
{
  "query": "the word you want to search for"
}
```

### Behavior

| Case | Response |
| --------------- | ----------------------------------------------- |
| Empty query | `400 { "error": "Query cannot be empty" }` |
| No results | `{ results: [], message: "No matches found." }` |
| Results found | Max 3 items, sorted by relevance |

## Install Dependencies
After cloning, make sure you are in the backend folder.

```bash
npm install

#after that run the server
node app.js
```

## Connecting With Frontend
React frontend uses endpoints:

```bash
http://localhost:5000/api/search
```

Make sure the backend is running first, then run the frontend.

Link to the frontend repository:

[Frontend Repo Link Here](https://github.com/NamriHolmes-indo/frontend-search.git)


