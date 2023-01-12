# Microtask 2
Database: MongoDB
## Authentication Microservice:
Route: '/api/auth'
Created Authentication API using bcrpyt and jsonwebtoken

Endpoint-```/api/auth/createUser``, Method-POST, Creates User
Endpoint-```/api/auth/login```, Method-POST, Login User
Endpoint-```/api/auth/getAllUsers```, Method-GET, Gets all users
Endpoint-```/api/auth/getUser/:id```, Method-GET, Gets user by id
Endpoint-```/api/auth/deleteUser```, Method-DELETE, Delete users

## Visitor Count Microservice:
Route: 'api/visitor/'
Adds count, gets count and reset counts of total number of visitors visited.

Endpoint-```api/visitor/addCount```, Method-POST : Adds count
Endpoint-```api/visitor/getCount```, Method-GET : Gets count
Endpoint-```api/visitor/resetCount```, Method-PUT : Resets count