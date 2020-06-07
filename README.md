# ChallengePhlo

This repository contains a web application where:

- The user can view nearby doctors
- The user can book* an appointment at one of the doctors
- The user receives a confirmation email that the appointment has been accepted

Booking the appointment will involve accepting the user's name, email address and preferred booking time. This information should then be relayed back to the user in a confirmation email. There is no need to store the appointment anywhere. We can assume that the integration with a booking system will be implemented in the future.

- Use Javascript (or Typescript) for the front-end, and any required technology for the backend.
- Add the source code to Github and provide instructions on how to access or run the application.
- Spend a maximum of 5 hours on this. Detailing any omissions of functionality.

## How to run the application using a local server

Clone the repository to your local folder

Go to /backend and run commands:
`npm install`
`node app.js`

This will start the API in:
`http://localhost:8080`

Go to /frontend and run commands:
`npm install`
`npm start`

This will start frontend in:
`http://localhost:3000/`

## Omissions of functionality
Here is a list of extra functionalities that I would have added with more time:

- Improve overall CSS styling (probably using Bulma to change buttons, inputs and adding a modal for booking the appointment)
- Use automation tool to start both servers in only one step, making it more developer friendly (using gulp.js for example)
- Create more test cases for the endpoints and adding test for front end
- Add a calendar component in the "booking time" field instead of using an input field. I also would have validated the time when you can get an appointment (only 9 to 5 for example, not allowing to take one at 3AM)
- Create more validations for email (with regex) and name
- Create a retry button if response from sendEmail failed, meaning email could not be sent
- Add link to Google Maps, showing instructions on how to get from users postcode to Doctors location. I wanted to replicate how the NHS "Search for GP" functionality works, because I thought that they already had figured out what was the best "user experience" for their portal
- Search by city or town, not only by postcode. For this, I would have needed another API to transalte city/postcode into coordinates and calculate the distance to the list of doctors
- Add "Current location" search, to take users exact coordinates for searching a doctor
- Limit the doctors that are shown by distance. If the doctor is too far away, don't show it in the list
- Sort doctors by distance, showing first the closest one to the user
- Follow standards for API response. I think it would be nicer to get a response from the API with a proper statusCode: 200/500,400... Receiving a "Success" from an API is not really the best way to do it. I can add validations in the API too. For example, if we send an incorrect postcode in the /getDoctors, in the API side we can return a 400: Invalid postcode

## Comments
My first idea was to replicate how NHS has their "Search for GP" page.
First I checked in Network how they make their API call.

They call the following: https://www.nhs.uk/Service-Search/find-a-gp/results/LE3%207DW which returns an HTML. 
We could parse the results but I thought that it would be easier to just create a simple API