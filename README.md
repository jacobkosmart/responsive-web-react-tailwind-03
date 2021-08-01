![Animation](https://user-images.githubusercontent.com/28912774/127764346-1648e82c-9149-4656-90af-918e8cb20cd3.gif)

# 설치

- CRA

- tailwind css with react

```bash
$ yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
$ yarn add @craco/craco
```

```json
// in package.json
// script 부분 이걸로 바꿔주기
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

- create craco.config.js in root

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

- create configuration file

`$ npx tailwindcss-cli@latest init`

```js
// tailwind.config.js 로 세팅
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

- Include Tailwind in your CSS

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- install react router dom

`$ yarn add react-router-dom`

- icon

https://heroicons.com/

## Reference

- tailwindcsss with CRA guid [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

- Brain Design [https://youtu.be/gOQ31Kc8H5E](https://youtu.be/gOQ31Kc8H5E)

- heroicons [https://heroicons.com/](https://heroicons.com/)
