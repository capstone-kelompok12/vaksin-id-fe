### what is vaksin-id
`vaksin.id` are web based application. built using react as front-ed framework and mui as ui framework. this app purpose are to manage vaccine booking system as admin(including manage stock, manage sessions and approve citizens vaccine booking)

---

### Getting started

using npm
```bash
git clone https://github.com/capstone-kelompok12/vaksin-id-fe.git
npm i
npm start
```

using yarn
```bash
git clone https://github.com/capstone-kelompok12/vaksin-id-fe.git
yarn
yarn run
```

---

### How to contribute

- start from our latest work on `dev` branch
	```bash
	git checkout dev
	```
- if you are working on new feature create an new branch named `feat/feature-name`
	```bash
	git checkout -b feat/login
	```
- if you are working on bug fixing create an new branch named `bugfix/bug-name`
	```bash
	git checkout -b bugfix/react-router
	```
- when you are done with your work, push it then create a new PR to `dev` branch

---

### Custom palette
This project was built using [Material UI](https://mui.com/). In Material UI you can add some custom palette to faster your work. When you've done setting the [custom palette](https://mui.com/material-ui/customization/palette/), you can do like this on your MUI elements:

```jsx
<Button  variant='contained'  color='success'>
	Success Button
</Button>
```
---

### Color palette list

* ![#0BEA82](https://placehold.co/15x15/0bea82/0bea82.png) primary
* ![#2E4057](https://placehold.co/15x15/2E4057/2E4057.png) secondary
* ![#6cd328](https://placehold.co/15x15/6cd328/6cd328.png) success
* ![#476cff](https://placehold.co/15x15/476cff/476cff.png) info
* ![#ffd000](https://placehold.co/15x15/ffd000/ffd000.png) warning
* ![#FF615e](https://placehold.co/15x15/FF615e/FF615e.png) danger

to use the color palette just put it at the `color` props on an MUI elements

```jsx
<Button  variant='contained'  color='success'>
	Success Button
</Button>

<Chip  variant='filled'  label='Custom chip'  color='info'/>

<Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
```

---

### License

Copyright © 2022 [Kelompok 12 Capstone Project SIB Alterra Academy Batch 3](https://github.com/capstone-kelompok12).<br />
This project is [MIT](https://github.com/capstone-kelompok12/vaksin-id-fe/blob/main/LICENSE) licensed.

happy coding!