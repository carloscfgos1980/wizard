## Wizard app steps:

1. Install app, redux, toolkit, bootstrap, react-router-dom
2. Create data/db.json and run de json package to fake the server(api)
   npx json-server --watch data/db.json --port 8000

Ufff.... I had a bug in filtered slice that took me forever to solve... very weird, when I try to use dispatch from Module.tsx. I got a bug with the argument, I got a type error saying that the function expected no arguments... i solved by call the function in a different component... still it was very weird.

I took some time got give som styling for better UX

it took me few hours to finish it... a lot more tan expected... all that nested data was quite a challange
