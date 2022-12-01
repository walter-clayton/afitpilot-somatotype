# CONTRIBUTION

## Backend
1. Add your MONGO_URI to the .ENV file.
2. Test the POST/GET/DELETE requests on [Postman](https://app.getpostman.com/join-team?invite_code=901de6d626d9a713844b515e71a3395c&target_code=11ab854ea36d73b71c518f64290ceade)
3. Check if the requests work on [MongoDB](https://cloud.mongodb.com/). 
> DATABASE > Browse Collections > afitpilot > fields


## Git and Github

### Firstly, Fork the MAIN repository!

1. Go to the main repository and fork it!
2. Open VS code and clone your forked repository
3. Quick Start
```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:4080 and client on http://localhost:3000
```

### Secondly, make tickets and code! 

1. Create your ticket id (name-number) on [Google Sheets](https://docs.google.com/spreadsheets/d/1kKUn01fwEMzRu1MTyYL9ec4WxLOuN9_IuVmes2zZxG0/edit#gid=0).
2. Start from the master branch and pull latest changes.
```
git pull
```
3. Checkout to your new branch and name it after your ticket id
```
git checkout -b <name-1>
```
4. Start coding 👨‍💻👩‍💻
5. Once finished, check all your changes
```
git status
```
6. If you are happy with the changes, add them!
```
git add .
```
7. Describe briefly what you have done.
```
git commit -m "added buttons to the home page"
```
7. Push your branch to Github.
```
git push origin name-1
```
8. Go to Github and create a pull request from your branch to the dev branch of the MAIN repository!
> Dev (main repository) <== name-1 (forked repository)
9. The request will then be reviewed and approved by the author 🔎
10. Your code will then appear in the dev branch of the MAIN repository ✅
11. Go back to your master branch and repeat the process 🔁
```
git checkout master
git pull
```