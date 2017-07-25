# Building a Small PWA with Preact and Firebase
This is the code behind a [blog post](https://dandenney.com/posts/front-end-dev/building-a-small-pwa-with-react-and-firebase) of the same name.

You can see it in action at [https://pwa-preact-firebase.firebaseapp.com](https://pwa-preact-firebase.firebaseapp.com), but it will require authing with Google to be useful. 

![Screenshot of 3 app screens](screenshot.png "Icon, Loading, App")

## Dependencies
- [Preact CLI](https://github.com/developit/preact-cli) (Tooling)
- [Firebase](https://firebase.google.com) (Auth, Database, Hosting)

## Setup
The best thing to do would be to create your own in Firebase and update the config, similar to how I do in the post. However, it *should* work if you:
- Clone the Repo
- `npm install`
- Install Preact CLI `npm i -g preact-cli`
- `preact watch`

To have your own working version, there will be one additional step. Copy your Firebase config information from _authentication > web setup_ and paste into `firebase.js`. The group of items you'll want look like the data below, but with your details: 
```
apiKey: 'AIzaSyBdk6HFp-9zT4oilTokoo4_e-ZX6uwR_Gg',
authDomain: 'pwa-preact-firebase.firebaseapp.com',
databaseURL: 'https://pwa-preact-firebase.firebaseio.com',
projectId: 'pwa-preact-firebase',
storageBucket: 'pwa-preact-firebase.appspot.com',
messagingSenderId: '263234041568'
```