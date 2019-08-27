# Metro Parks Calendar Proof-of-Concept

## Run locally

```
git clone git@github.com:/sitecrafting/calendar-poc.git
cd calendar-poc
yarn
yarn run start
```

The last command should output a port number. Go to `localhost:<PORT>` in your browser.

Finally, run this in a separate terminal window:

```
yarn build
```

*NOTE:* Due to some finicky-ness, you may need to trigger one last recompile by saving `src/app.js` and then reloading your browser window.
