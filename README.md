# Front-end Development - Final Assignment

## React Student Dashboard

Assignment: Create and Design a Student Dashboard to make it easy for teachers to see how the students evaluate the assignments.

* Current situation: Excel.
* Design: The evaluation of each student in a "Bar Chart".
* Tools: Use a JavaScript framework such as React.
* Data: A spreadsheet file (in Google Docs) with a mountain of mock data, with fake students. These are the results of students once they have completed all assignment evaluations.
    * This data has the following structure:
        * Name of Student
        * Name of the Assignment/Project
        * Rate how much fun the assignment was
        * Rate how much difficult the assignment was
* It is up to you to model and structure the data correctly.
* A good way to work with data is a CSV file. You can download the data from Google Sheets as CSV. You can also work directly with the data from Google Sheets.

## Requirements Assignment

### Dashboard Overview user-story:

* As a user, when I open the homepage of the application I want to see an overview in the form of a bar chart of the evaluations (fun & difficult) of all students. As a user, I must be able to distinguish at a glance between the assignments and the fun/difficult evaluation. Make sure that a clear distinction is made visually, for example by working with clear colours.
* Separate routing per student As a user I want to see a list of the names of all students and be able to click on one of these students. When I click on a student name I am taken to the route /{name-of-student}. The bar chart adjusts with the data of only this student. Tip: the chart remains the same on the X and Y axes, only gets "less" data, namely the data of 1 student.

* Design: Create a tool that you are proud of and that you would like to show to a future employer. We pay particular attention to: legibility of the graphs. Slicing and dicing. - 

    Choose one of the methods below:    
    * As a user of the tool you can "slice and dice" the data in a number of ways". 
        * Option 1: As a user, I want to be able to indicate by means of a checkbox whether I only want to show in the bar chart how nice the assignment was, only want to see how difficult the assignment was, or both. 
        * Option 2: As a user, in addition to filtering on 1 person, I also want to be able to filter on multiple people. I, therefore, want to see a checkbox in the overview of my students that I can do check if I want to include the data of this specific student in my chart uncheck if I want to exclude the data of this specific student from my chart. 
        * Option 3: As a user, I want to see a line-chart representation of my data showing the average grade for "fun" and the average grade for "difficult".

### Bonus Features for this assignment
* Make sure that the data can be "sliced and diced" in more than 1 way (see requirement 3).
* Table overview of all data ⇒ so as an Excel spreadsheet. You can decide for yourself how you want to structure the columns / rows: You can still filter in all the above ways. Add sort by data column.
* User Profiles. You can then add a profile for each student page and further enrich the fictitious students with:
    * Last name 
    * Age 
    * Phone number 
    * E-mail address 
    * Photo (URL)
* Sort the students by average grades (high to low or low to high).

## Technologies

* HTML5
* CSS3
* SCSS
* JavaScript (ES6)
* React
* JSON

## Sourcres

* [Font Awesome](https://www.fontawesome.com)
* [Recharts](https://www.recharts.com)
* [Mui](https://www.mui.com)

## Project Visuals
![Homepage](/ProjectVisuals/homepage.png)
![StudenAnalyticsOverview](/ProjectVisuals/studentAnalyticsOverview.png)
![studentList](/ProjectVisuals/studentList.png)
![studentProfile](/ProjectVisuals/studentProfile.png)
