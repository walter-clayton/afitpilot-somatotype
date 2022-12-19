# Errors

## Server

### Issue

` Error: listen EADDRINUSE: address already in use :::8000`

### Solution

` lsof -i tcp:8000`

#### then

` sudo kill -9 PROCESS_ID`
