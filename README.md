# Twitter clone legacy to remastered

## Description

## Installation

**1**. Install firebase tools globally

```shell
pnpm install -g firebase-tools
```

**2**. Login to firebase

```shell
firebase login
```

**3**. Create a Firebase project

```shell
firebase projects:create
```

and enter a unique ID in lower case (aka : _my-super-project_).

> NOTE : If it not work go on the firebase console and create a project manually
> https://console.firebase.google.com/

Store your ID in a `.env` file as `FIREBASE_PROJECT_ID`.

**4**. Enable Experimental features

```shell
firebase experiments:enable webframeworks
```

**5**. Initialize the Firebase project

```shell
firebase init hosting
```

and select the project you just created.

**6**. Initialize Firebase Emulators

```shell
firebase init emulators
```

And enable _Authentication_ and _Firestore_ (keep _hosting_ enabled).

Choose a port for the auth emulators (in my case : 9099).
Choose a port for the firestore emulators (in my case : 8080).
Choose a port for the hosting emulators (in my case : 5000).

Enable the Emulator UI. Choose a port for the Emulator UI or leave empty.

Wait for the download of the emulators.

**7**. Install dependencies

```shell
pnpm install
```

**8**. Run the Firebase locally

```shell
pnpm fb-start
```

The Firestore emulator UI run at http://localhost:8080/firestore
The Authenticator emulator UI run at http://localhost:9099/firestore

**9**. Run the app
In another terminal

```shell
pnpm start
```

**10**. Open the Emulator UI

```shell

```
