# DEPLOYMENT

## afitpilot-server

1. Make sure tsconfig.json excludes the frontend.

` "exclude": [ "client", ]`

2. Create a directory for your javascript compiler in tsconfig.json.

` "compilerOptions": { "outDir": "dist",`

3. Convert everything to javascript in the command line.

` tsc`

4. Go to [Render.com](https://dashboard.render.com/) to deploy.

## afitpilot-front

1. Make sure all dependencies are in package.json
