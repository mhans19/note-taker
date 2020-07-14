# <div align="center">**NOTE TAKER**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> The purpose of this challenge was to build an note-taking web application that uses an [Express.js](https://www.npmjs.com/package/express) back end that sends and retrieves persistent note data from a JSON file. Additionally, this project was to be deployed via [Heroku](https://dashboard.heroku.com/).  

---

## **APPLICATION LINKS**
> [Live Heroku Application](http://hidden-badlands-64622.herokuapp.com/)   
> [GitHub Repository](https://github.com/mhans19/note-taker)  

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submisksionId=813167e8-8027-1e16-5911-1c143c23561f) |  
  
---

## **DEVELOPMENT**  
This application was developed with the following application structures:  
1. [Node.js](https://nodejs.org/en/)  
2. [Node Package Manager (NPM)](https://www.npmjs.com/)
    + [NPM Inquirer](https://www.npmjs.com/package/inquirer)  
    + [NPM File System (fs)](https://nodejs.org/api/fs.html)  
    + [NPM Path](https://www.npmjs.com/package/path)
    + [NPM Express](https://www.npmjs.com/package/express)
    + [NPM shortid](https://www.npmjs.com/package/shortid)
3. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   
4. [jQuery](https://jquery.com/)   
5. [JSON](https://www.json.org/json-en.html)
6. [Insomnia](https://support.insomnia.rest/article/11-getting-started)
7. [Hypertext Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML)

---

## **INSTALLATION**
> This online application does not require any installation prior to running.   
However, if interested in contributing to the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/note-taker) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.   

---

## **USAGE**
> The application is deployed with Heroku and available for immediate use. Simply navigate to the application by following the [application link](http://hidden-badlands-64622.herokuapp.com/).


---

## **TESTING**
> During development efforts, [Insomnia](https://support.insomnia.rest/article/11-getting-started) was used to test GET and POST routes.  

---

## **USER STORY**  
> AS A small business owner   
> I WANT to be able to write and save notes   
> SO THAT I can organize my thoughts and keep track of tasks I need to complete   
---

## **ACCEPTANCE CRITERIA**
> GIVEN a note-taking application  
> WHEN I open the Note Taker  
> THEN I am presented with a landing page with a link to a notes page  
> WHEN I click on the link to the notes page  
> THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column   
> WHEN I enter a new note title and the note’s text  
> THEN a Save icon appears in the navigation at the top of the page  
> WHEN I click on the Save icon  
> THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes  
> WHEN I click on an existing note in the list in the left-hand column  
> THEN that note appears in the right-hand column  
> WHEN I click on the Write icon in the navigation at the top of the page   
> THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column  

---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Acceptance Criteria: 40%</div>**
- [x] Satisfies all of the preceding acceptance criteria plus the following
- [x] Application front end must connect to an Express.js back end. 
- [x] Application back end must store notes with unique IDs in a JSON file.
- [x] Application must be deployed to Heroku.

### **<div align="center">Deployment: 36%</div>**
- [x] Application deployed at live URL.
- [x] Application loads with no errors.
- [x] Application GitHub URL submitted.
- [x] GitHub repository contains application code.

### **<div align="center">Application Quality: 11%</div>**
- [x] Application console is free of errors.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains quality README file with description, screenshot, and link to deployed application.

---

## **FUNCTIONALITY**  
1. In an internet browser, navigate to [deployed application](http://hidden-badlands-64622.herokuapp.com/).
![](/assets/images/landingpage.PNG)  
2. Click the 'Get Started' button to navigate to the notes page. Notice in the left-hand column of the notes page, existing notes persist.
![](/assets/images/notepage.PNG)  
3. Add a new note by typing a title and text to the fields in the right-hand column. Click on the pen icon in the upper right-hand corner of the screen to open a new note template.
![](/assets/images/addnote.PNG)  
4. Save the note by clicking the save icon in the upper right-hand side of the screen. The saved note will populate in the left-hand column. Clicking on any existing note will populate the information in the right-hand column.
![](/assets/images/savenote.PNG)  
5. Delete an existing note by clicking on the red trash can icon to the right of note title. The note will be deleted and the list updated (notice "Another Note" has disappeared upon deletion).
![](/assets/images/deletenote.PNG)