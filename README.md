# React Gravatar
React component for rending gravatar images.

## Install
```js
npm install gravatar-react
```

## Usage
Simple example
```js
<Gravatar email="dickson.alvin@gmail.com" />
```
or
```js
<Gravatar
  email="dickson.alvin@gmail.com"
  size=100
  rating="PG"
  alt="Alvin Dickson profile"
  secure
/>
```

## Options
- **email**      -- profile image
- **size**       -- profile size, default 50
- **rating**     -- image rating, default G
- **alt**        -- alt image
- **secure**     -- require secure images, default false
- **force**      -- force the default image to always load
- **default**    -- default gravatar when email have no matches images

## License
MIT