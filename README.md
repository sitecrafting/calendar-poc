# Metro Parks Calendar Proof-of-Concept

## Run locally

```
git clone git@github.com:/sitecrafting/calendar-poc.git
cd calendar-poc
yarn
yarn run start
```

The last command should output a port number. Go to `localhost:<PORT>` in your browser; the window should refresh automatically when the JavaScript changes.

## Edit LESS

To watch the LESS files and compile changes automatically, run this in a separate terminal window:

```
yarn build
```

Changes to the main LESS file, `src/app.less`, will now trigger rebuilds of the CSS.
