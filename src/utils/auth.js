import firebase from '@/utils/firebase';
import router from '@/router';

export function onAuthStateChanged(nextOrObserver, error, completed) {
  return firebase.auth().onAuthStateChanged(nextOrObserver, error, completed);
}

export function gotoLogin() {
  router.push({ name: 'Login' });
}

export function login(email, password) {
  console.log({
    email,
    password,
  });
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.warn({
        errorCode,
        errorMessage,
      });
    })
    .then((result) => {
      console.log('result', result);
    })
  ;
}

export function getUser() {
  return firebase.auth().currentUser;
}


export function isLoggedIn() {
  return !!getUser();
}

export function logout() {
  return firebase.auth().signOut();
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}

