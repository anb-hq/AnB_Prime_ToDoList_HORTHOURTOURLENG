# Project Description

This project is an individual project to make a TodoList website that has:

 - Layout Todolist

 - Implement the function that creates a Todo

 - Modify the contents of the created Todo

 - Delete the contents of the created TOdo

 - Render the created Todos in the form of a List
 
 - Search function for search Title of Tasks

 - Store data in local storage

# Technologies used

The main technologies used in this project include:

- React

- JavaScript

- JSX (JavaScript XML)

- CSS (Cascading Style Sheets)

- LocalStorage

- Git (deployment)

External Libraries:

 - Font Awesome: Font Awesome: [Link](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css).

 - Google Font: Roboto. [Link](https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap)

# Convention Guide

Convention guide can be accessed [here](/document/convention-guide.md).


# Git flow methods 

I followed Git Flow methodology.
The final merged branch for my project is the main branch.

## Branches:
I used 4 main branches for my project :

 - `main` branch: it represents the latest production-ready state of my project. It contains stable code that is suitable for deployment.

 - `develop` branch: It is where ongoing development and integration of new features occur. It's a branch from which feature branches are created and merged back once the features are complete.

 - `feature` branch: For each new feature, a dedicated feature branch was created from the develop branch. Feature branches are where the actual coding takes place. To create a feature branch.

- `release` branches: To prepare the codebase for a new release, I introduce release branches. A release branch is created from the develop branch and is used to ensure that the upcoming release is stable and ready for deployment. During this phase, only bug fixes and necessary changes are made. Once the release branch is thoroughly tested, it's merged into both the main branch for deployment and the develop branch to incorporate any last-minute fixes back into ongoing development.

 # How I worked:

 - First of all, a bare-bone project is created in Github with main and develop branches. (I accidentally pushed a branch called 'develop' to the repositories I work on. To fix this, I decided to delete the 'main' branch and create a new one from 'develop'. Then, I used 'git reset' to the initial project setup to connect 'develop' and 'main' for merging.)

 - I create issues related to the feature that I need to build

 - and then I clone repositories and make features by using the ` git flow ` methodology to create a new feature branch.

 - After finishing the feature, I will push publish it and create a pull request, and then I review my code again after done review, I merge it into the develop branch.

 # Documentation: 
 
 - [UI Prototype](https://www.figma.com/file/Ont3MlX1lbf2nKBEjuul89/Todo-Tourleng?type=design&node-id=0%3A1&mode=design&t=atUhlhfiwInE8HDn-1)
 - [Flow Guide](https://zpl.io/kDkG4mq)
# noted:
I did code all by myself but on git when I have a problem that can't merge from develop to main. Mr. Moonlight helped me solve it.
