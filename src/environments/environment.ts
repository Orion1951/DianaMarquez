// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyAzza-YOR5YaPxNlVt8sfiEsD1oTAgknZ8',
      authDomain: 'diana-marquez.firebaseapp.com',
      projectId: 'diana-marquez',
      storageBucket: 'diana-marquez.appspot.com',
      messagingSenderId: '1008993612390',
      appId: '1:1008993612390:web:69b67f3f91f5e5183ab3a7',
    },
  },
  actionCodeSettings: {
    url: 'http://localhost:3000/demo',
    handleCodeInApp: true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
