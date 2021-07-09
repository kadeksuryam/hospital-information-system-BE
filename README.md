<!-- PROJECT SHIELDS -->


<br />
<p align="center">
  <h3 align="center">Hospital Information System</h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot](https://imgur.com/eAQ53Im.png)

Hospital Information System is a project that is required to build, in a part of COMPFEST Software Engineering Academy selections.

Deployed Site : https://his-sea-compfest.herokuapp.com/

Frontend Repo : https://github.com/kadeksuryam/hospital-information-system-FE/

### Built With

Frontend
* [ReactJS](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)

Backend
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install --global yarn
  ```
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kadeksuryam/hospital-information-system-BE.git
   ```
WITH DOCKER:

2. Build the image named `his`
   ```sh
   docker build -t his .
   ```
WITHOUT DOCKER:

2. Install YARN packages
   ```sh
   yarn install
   ```

<!-- USAGE EXAMPLES -->
## Usage

WITH DOCKER:

1. Run the Docker Container
   ```sh
   docker run -it -p 5000:5000 his
   ```
   Container is now run at PORT 5000 and also same with our machine (host). 
   You can change the ports by changing command above using the following rule `HOST_PORT:CONTAINER_PORT`
   
2. You can open the app at `localhost:HOST_PORT`

WITHOUT DOCKER:

1. Start the server
   ```sh
   yarn start
   ```
2. You can open the app at `localhost:PORT` where PORT is the corresponding PORT that has displayed on the console

3. Use following account to test the Admin functionality:

   Email : `kadeksuryam@gmail.com`
   
   Password : `kadeksuryam1729`

<!-- CONTACT -->
## Contact

Kadek Surya Mahardika - kadeksuryam@gmail.com

Project Link: https://github.com/kadeksuryam/hospital-information-system-BE/
