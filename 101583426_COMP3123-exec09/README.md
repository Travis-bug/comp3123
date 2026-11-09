# COMP3123 Lab Week 09 - React JS

**Student:** Travis Eweka  
**Student ID:** 101583426

A React app made with `npx create-react-app labweek09`. The default page was changed to show the course, the lab, my student ID, my name and the school under the React logo.

## How to run

```bash
npm install        # node_modules is not included
npm start          # opens http://localhost:3000
```

`npm test` runs a check that every line of the page is shown.

## How it uses state and props

- `src/App.js` keeps the page's information in **state** (`useState`): title, subtitle, student ID, name and school.
- It passes each value to the `StudentInfo` component as **props**.
- `src/StudentInfo.js` shows the props as headings, from `h1` (title) down to `h5` (school).
- `src/App.css` gives the page a white background with the text centred under the logo.

## What the page shows

| Line | Text |
|------|------|
| Heading 1 | Welcome to Fullstack Development - I |
| Heading 2 | React JS Programming Week09 Lab exercise |
| Heading 3 | 101583426 |
| Heading 4 | Travis Eweka |
| Heading 5 | George Brown Polytechnic, Toronto |
