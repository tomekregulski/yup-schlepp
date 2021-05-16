# Yup Schlepp/ yup-schlepp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [Deployed](https://guarded-atoll-77888.herokuapp.com/)
- [Repo](https://github.com/yondav/yup-schlepp)

## About / Synopsis

Yup Schlepp is the beginning of an intensive project revolving around the needs of your average NYC leasing agent. The goal is to build a full force CRM over time, specific to the needs of Yup Realty, LLC.

In our first version we present the ability to add and edit listings through their numerous data points spanning from data that corresponds to the landlord, building, unit, amenities, location, etc.

While we have the ability to delete from the database and our routes, we don't offer it through the UI. We chose to deliver the initial version this way with purpose. We don't encourage agents to remove listings from the database. Instead we encourage agents to mark the unit's status to show it's availability. Apartments come back on the market on a yearly basis and we want to offer ease of renewing listings with all of their corresponding data when units come back on the market.

[Express](http://expressjs.com/) server supports `GET`, `POST`, `PUT`, `PATCH` and `DELETE` requests.

---

## Table of contents

> - [Title / Repository Name](#title--repository-name)
>   - [About / Synopsis](#about--synopsis)
>   - [Table of contents](#table-of-contents)
>   - [Installation](#installation)
>   - [Usage](#usage)
>     - [Config](#config)
>     - [Schema](#schema)
>     - [Seed](#seed)
>     - [Start Server](#start-server)
>   - [Author](#author)
>     - [Contact](#contact)
>   - [Contributing / Issues](#contributing--issues)
>     - [Contributing](#contributing)
>     - [Reporting Issues](#reporting-issues)
>   - [License](#licenses)
>   - [Technologies](#technologies)

---

## Installation

- Clone repo
- Open integrated terminal on the root directory
- Install dependencies :

```
npm i
```

---

## Usage

![authentication](./readme-gifs/auth.png)

### Authentication

- this is an internal application for Yup Realty LLC. Functionality is not accessible without authentication.

For Demoing:

```
email: agent@yupny.com
password: password
```

### Views & Queries

![views](./readme-gifs/view.gif)
![queries](./readme-gifs/queries.gif)

- The following query example will return all apartments within the price range of $1000 and $3000 in Bushwick with at least one bedroom, a balcony and permits pets:

```
http://127.0.0.1:8080/results/units/?unit[legal_beds=1]&unitAmenities[balcony]=true&unitAmenities[city_view]=true&building[neighborhood]=Bushwick&buildingAmenities[pets_allowed]=true&unit[__gte_gross_rent]=1000&unit[__lte_gross_rent]=3000
```

### Add & Edit Listings

![edit](./readme-gifs/edit.gif)
![add](./readme-gifs/add.gif)

- Add and edit listings in the database

---

### Config

Configure `.env.EXAMPLE`

- rename file to `.env`

```
DB_NAME=yup_db
DB_USER=<sql_username>
DB_PW=<sql_password>

// Cloudinary config

CLOUD_NAME=<cloudinary_account>
CLOUD_KEY=<cloudinary_key>
CLOUD_SECRET=<cloudinary_secret>

// Google API Key
GKEY=<google_API_key>

```

---

### Schema

`db` directory holds `schema.sql` with script to create database in Workbench or from the command line.

---

### Seed

`seeds` directory holds placeholder data to seed the database. Data can be changed to suit users needs or preference.

```
npm run seed
```

---

### Start Server

```
npm start
```

for `nodemon server.js`:

```
npm run watch
```

---

## Contributors

### Yoni David

- <a href="https://yondav.us/">Portfolio</a>
- <a href="https://github.com/yondav">Github</a>

### Tomek Regulski

- <a href="https://tomekregulski.github.io/portfolio/">Portfolio</a>
- <a href="https://github.com/tomekregulski">Github</a>

### Lauren Drew

- <a href="https://lawriedrew.github.io/Professional-Materials/">Portfolio</a>
- <a href="https://github.com/LawrieDrew">Github</a>

### Neil Creveling

- <a href="https://neilcreveling.github.io/Updated-Portfolio/">Portfolio</a>
- <a href="https://github.com/neilcreveling">Github</a>

---

### Contact

Inquiries can be sent to [info@yupny.com](mailto:info@yupny.com)

## Contributing / Issues

---

### Contributing

- Fork repo
- Make additions and changes on new, personalized branch
- Submit [pull request](https://github.com/yondav/yup-schlepp/pulls)

---

### Reporting Issues

Report issues by selecting the [issues](https://github.com/yondav/yup-schlepp/issues) tab and creating a new issue

---

## Licenses

- [MIT](https://github.com/yondav/13-e-commerce-back-end/blob/main/LICENSE)

---

## Technologies

- [Sequelize](https://sequelize.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Cloudinary](https://cloudinary.com/)
- [Streamify](https://www.npmjs.com/package/streamify)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Font-Awesome](https://fontawesome.com/)

---

<svg width="20" viewBox="0 0 128 128">
<path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927-4.894-3.092-17.448-9.817-21.072-.975-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path>
</svg>

<svg width="20" viewBox="0 0 128 128">
<title>Artboard 7</title><g id="original"><path id="Path-2" d="M14.59,62.67a7.14,7.14,0,0,0,2.31-3.48c.46-2,.36-3.94-2.31-5.3C7.82,50.47,3.45,56.57,2.77,58s-1.74,3.68-1,8.84,3.19,9.9,11,11.73A32.89,32.89,0,0,0,34.77,76c6.84-3.26,19.7-9,22.94-9.58a28.15,28.15,0,0,1,6.49-.81V57.76a18,18,0,0,0-17.38-9.15C34.43,49.59,29.51,56,26.49,58.7s-8.61,9.17-12.37,8S9.31,61,10.64,59.56s2.37-1.18,3.18,0A6.24,6.24,0,0,1,14.59,62.67Z"></path><path id="Path-2-Copy" d="M113.41,62.67a7.14,7.14,0,0,1-2.31-3.48c-.46-2-.36-3.94,2.31-5.3,6.76-3.43,11.13,2.67,11.81,4.11s1.74,3.68,1,8.84-3.19,9.9-11,11.73A32.89,32.89,0,0,1,93.23,76c-6.84-3.26-19.7-9-22.94-9.58a28.15,28.15,0,0,0-6.49-.81V57.76a18,18,0,0,1,17.38-9.15c12.39,1,17.32,7.38,20.34,10.08s8.61,9.17,12.37,8,4.81-5.76,3.48-7.19-2.37-1.18-3.18,0A6.24,6.24,0,0,0,113.41,62.67Z"></path></g>
</svg>

<svg width="20" viewBox="0 0 128 128">
<path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
</svg>

<svg width="20" viewBox="0 0 128 128">
<path fill="#F0DB4F" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
</svg>

<svg width="20" viewBox="0 0 128 128">
<path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
</svg>

<svg width="20" viewBox="0 0 128 128">
<path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
</svg>

<svg width="20" viewBox="0 0 128 128">
<path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"></path>
</svg>

---

This README file was built with [README Generator](https://github.com/yondav/README-gen-09)

Copyright &copy; 2021, Yup Realty, LLC
