<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
  import firebaseui from 'firebaseui';
  import firebase from '@/utils/firebase';

  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  export default {
    name: 'auth',
    mounted() {
      const uiConfig = {
        signInSuccessUrl: '/success',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      };
      ui.start('#firebaseui-auth-container', uiConfig);
    },
    destroyed() {
      ui.reset();
    },
  };
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
