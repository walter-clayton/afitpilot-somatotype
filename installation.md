## Guide of installation

Here's a guide on how to use this package.json file:

1. Installation: To install all the dependencies for both the server and the client, run the following command:

```bash
npm install
npm run install-front-back
```

2. This command uses concurrently to run npm install in both the ./server and ./client directories at the same time.

```bash
npm start
```

This command uses concurrently to run the start:dev-v1 script in the ./server directory and the start script in the ./client directory at the same time.

3. Building the application: To build both the server and the client at the same time, run the following command:

```bash
npm run build
```

This command uses concurrently to run the build-v1 script in the ./server directory and the build script in the ./client directory at the same time.

Author and License: The author of this project is Walter Clayton and it is currently unlicensed.

Development Dependencies: The only development dependency is concurrently, which is used to run commands for the server and client at the same time.
