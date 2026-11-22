# COMP3123 Lab Week 11 - Working with Axios and Fetch API

**Student:** Travis Eweka  
**Student ID:** 101583426

A React app made with Vite. It asks the free `randomuser.me` API for 10 random
people and shows each one on a card, using react-bootstrap for the styling.

## How to run

```bash
npm install        # node_modules is not included
npm run dev        # opens http://localhost:5173
```

## How it works

- `src/PersonList.jsx` is the main component. It keeps the list of people in
  **state** (`useState`) and loads them inside a `useEffect` that runs once when
  the component first appears - that is the hooks version of the handout's
  `componentDidMount()`. The handout's class-component code is kept as a comment
  right above it so the two can be compared.
- Each person is drawn with react-bootstrap `Card`, `Row`, `Col` and `Button`.
  The card header is the person's title, first name, last name and uuid. The
  left side is the round picture with a **Details** button under it, the right
  side is the list of label/value lines (User Name, Gender, Time Zone
  Description, Address, Email, Birth Date and Age, Register Date, Phone#, Cell#).
- `src/App.css` holds the small bits of styling Bootstrap does not give on its
  own: the green "User List" bar, the teal card colour and the round picture.
- `src/main.jsx` imports `bootstrap/dist/css/bootstrap.min.css` once, which is
  what makes all the react-bootstrap components look right.

## The two ways of getting the data (step 4 of the lab)

The lab says to try getting the data with the fetch or the axios API, so both
are in the project:

- **axios** - `src/PersonList.jsx`. `axios.get('https://randomuser.me/api/?results=10')`
  then `res.data.results`. This is the request that fills the list on screen.
- **fetch** - `src/FetchExample.jsx`. The same URL read with the browser's
  built-in `fetch()`, which needs an extra `res.json()` step before the data can
  be used. It prints a one-line note under the list saying how many people came
  back, so it is easy to see it ran.

Both also `console.log` what they got, so the two responses can be compared in
the browser's developer console.
