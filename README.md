# Objective
Understand and implement basic HTTP methods (GET and POST) in an Express application. Handle URL and query parameters in Express routes, and practice sending and receiving JSON data.

# Instructions
## Part 1: Create and Clone Your GitHub Repository
### Create a New GitHub Repository:

Name your repository express-http-methods.


Initialize it with a .gitignore for Node.js and a README.md.


### Clone Your Repository:

Clone your repository to your local machine.


Navigate to the cloned repository's directory to begin your project setup.


## Part 2: Setup and Configuration
### Initialize a Project:

Within your project directory, run npm init -y to generate necessary files.
![alt text](image.png)

### Install Dependencies:

Add the necessary dependencies with npm install express.
![alt text](image-1.png)

## Part 3: Implement Routes for GET and POST Requests
### Setup Basic Routing:

Create a new file named index.js.
![alt text](image-2.png)

Set up routes to handle GET and POST requests.
![alt text](image-3.png)
![alt text](image-9.png)

### Middleware:

Include middleware to parse JSON bodies.
![alt text](image-4.png)

### Create Routes:

Implement routes to handle the following:

A GET request to the root (/) that responds with a welcome message.
![alt text](image-5.png)

A GET request to /about that responds with a JSON message.
![alt text](image-6.png)

A POST request to /contact that responds with the submitted data.
![alt text](image-7.png)

Ensure there is a catch-all route for undefined routes that returns a 404 status code.
![alt text](image-8.png)

## Part 4: Handle URL and Query Parameters
### URL Parameters:

Add a route to handle URL parameters for /user/:id.
![alt text](image-10.png)
![alt text](image-13.png)

### Query Parameters:

Add a route to handle query parameters for /search.
![alt text](image-11.png)

## Part 5: Testing
### Test the Routes:

Use Thunder Client or Postman to test the routes.

### Example tests:

POST /contact: Send a JSON body with name and email.
![alt text](image-12.png)

GET /user/:id: Replace :id with a sample user ID.
![alt text](image-14.png)

GET /search: Include query parameters term and sort.
![alt text](image-15.png)

## Submission
GitHub Repository: Submit the URL of your GitHub repository. Ensure it includes all necessary files to run the project and an updated README.md, and is set to public.
https://github.com/rja87sd/express-http-methods

Additional Requirements (if any): Please specify if you need the assignment deployed or any screenshots for verification.

## Credits
Credit to ChatGPT for assistance and code comments.