<h1 align="center">Leniolabs Bootcamp</h1>
<h2 align="center">Marvel Search</h2>

## Author

- [@Jimmy404](https://github.com/jimmy404)

## Heroku URL - Proyect

['https://lenioweb-reactchallenge.herokuapp.com/'](https://lenioweb-reactchallenge.herokuapp.com/)

## Features

- Light/dark mode toggle.
- 100% Responsive.
- SSr > More fast More awesome.
- Individual Hero search + Url search.
- Individual Comic search + Url search.
- Multiple search for Heroes and Comics + Url search.
- Random (Hero + Comics) on each Home update.
- The results are in the form of cards.
- Each card has the option to save it as a favorite.
- Favorites are stored in the localStorage.
- Each Hero when clicking, displays a modal with the list of comics ordered by date.
- When clicking on a comic inside the modal, it redirects to a Comic page with its detail.
- The Navigation bar brings a star to filter the search favorites.
- Style modification possible (when changing variable values ​​> Styled-components).
- Wrong search and hero without comics > built-in error message

## Installation 

Install lenioweb_reactchallenge with **npm**

```bash 
  1) Clone project: lenioweb_reactchallenge (url)
  2) cd lenioweb_reactchallenge/
  3) npm install
  4) npm run dev > Getting started section
```

Install lenioweb_reactchallenge with **yarn**

```bash 
  1) Clone project: lenioweb_reactchallenge (url)
  2) cd lenioweb_reactchallenge/
  3) yarn install
  4) yarn dev > Getting started section
```

## API Reference & Keys

#### https://developer.marvel.com/
1) Log In (or create an account)
2) Get a key (Public and Private)
3) Hash your key (Public and Private)
- Ej: MD5 hash generator > (ts+Private+Public) // ts= Timestamp
4) Go to the **folder** "services/services.js"
5) Replace (MARVEL_PUBLIC_KEY & MARVEL_HASH) with your values:
``` 
const MARVEL_PUBLIC_KEY = 'abc0def1ghi2jkl3mno4pqr5sru6vwx7yz8';
const MARVEL_HASH = 'abc0def1ghi2jkl3mno4pqr5sru6vwx7yz8';
```
5) Interactive documentation (API tester)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the code and adds new feats!. **Good luck and thanks!**

## Tech Stack

1) Project created with Next JS
2) Functional programming
3) Styled-components
4) Requests with axios
5) UseContext
6) LocalStorage
7) Prettier + Eslint
8) Deploy in Heroku
9) Version control system: Git
10) Hosting repository: Github
11) API call tests: Postman / Marvel API

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs).
- [React Documentation](https://es.reactjs.org/).
- [Styled-components Documentation](https://styled-components.com/).
- [Axios Documentation](https://axios-http.com/docs/intro).
- [Git Documentation](https://git-scm.com/doc).
- [Heroku Documentation](https://devcenter.heroku.com/categories/reference).

