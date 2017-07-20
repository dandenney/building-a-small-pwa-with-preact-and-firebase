import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBdk6HFp-9zT4oilTokoo4_e-ZX6uwR_Gg',
	authDomain: 'pwa-preact-firebase.firebaseapp.com',
	databaseURL: 'https://pwa-preact-firebase.firebaseio.com',
	projectId: 'pwa-preact-firebase',
	storageBucket: 'pwa-preact-firebase.appspot.com',
	messagingSenderId: '263234041568'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
