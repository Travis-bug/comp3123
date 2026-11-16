# COMP3123 Lab Week 10 - React JS

**Student:** Travis Eweka  
**Student ID:** 101583426

A React app made with Vite. It shows a data entry form, and when Submit is pressed it shows what was entered in a table under the form.

## How to run

```bash
npm install        # node_modules is not included
npm run dev        # opens http://localhost:5173
```

## How it works

- `src/App.jsx` keeps the form in **state** (`useState`). `handleChange` updates the field being typed in, and `handleSubmit` saves a copy of the form when Submit is pressed.
- `src/DataEntryForm.jsx` draws the form (Email, Name, Address, Address 2, City, Province, Postal Code, the terms checkbox and Submit). It gets the values and the handlers from `App` as **props**.
- `src/SubmittedInfo.jsx` shows the submitted information in a table: Email, Full Name, Address, City, Province and Postal Code.
- `src/App.css` styles the form (green border, three fields in the City row, green Submit button) and the table.
