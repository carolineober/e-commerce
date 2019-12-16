import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCDBC_Q0vAj9nQSkDf3y5J0bJsNcuOK-MY",
  authDomain: "crwn-db-dc8c2.firebaseapp.com",
  databaseURL: "https://crwn-db-dc8c2.firebaseio.com",
  projectId: "crwn-db-dc8c2",
  storageBucket: "crwn-db-dc8c2.appspot.com",
  messagingSenderId: "414392347963",
  appId: "1:414392347963:web:5cba7e8c03373aadbb5b1e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export default firebase;

