<div align="center">
<h1 align="center">
<img style="width: 100px" src="https://www.sendx.io/hubfs/SendPost_August2021/images/SendX-By-Logo.svg" width="100" />
<br>sendx-frontend-iec2020097
</h1>
<h3>◦ ► INSERT-TEXT</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat-square&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />

<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat-square&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue.js" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/sauhard22/asdasd?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/sauhard22/asdasd?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/sauhard22/asdasd?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/sauhard22/asdasd?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running the temporary server](#-running-the-temporary-server)
    - [🏃 Run the Vue Web App](#-run-the-vue-web-app)
- [⚙️ Folders](#-folders)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

Created a comprehensive web application for generating no-code forms and landing pages tailored to your specific requirements. The application is powered by an incredibly robust drag-and-drop editor provided by Unlayer.

---

## 📦 Features
- Users can select the type of form they want to use
  
![type](https://github.com/sauhard22/readme/assets/73341891/62d25431-7776-4d57-9182-ae3703a1e0ad)

- Templates can be selected from our template gallery or users can start a new blank project
  
![design](https://github.com/sauhard22/readme/assets/73341891/8fff602a-98f6-4bf9-8df1-2dde94d8f542)

- A powerful drag-and-drop editor powered by `Unlayer` helps to create forms and landing pages super fast and easily.
  
![content](https://github.com/sauhard22/readme/assets/73341891/98e614d9-89d2-4250-a41c-28c3e12a1a05)

- The behavior of the form or the landing page can be customized.
  
![behaviour](https://github.com/sauhard22/readme/assets/73341891/34f08f7d-730a-44d2-afbc-cf0491584ba7)

- What happens after success can also be customized.
  
![success](https://github.com/sauhard22/readme/assets/73341891/0e7be17b-eb0f-4e76-8d5b-1187fcfa003c)

---

## 📂 Folder Structure

```sh
└── sendx-frontend-iec2020097/
    ├── db/
    │   └── db.json
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── App.vue
    │   ├── components/
    │   │   ├── Breadcrumb.vue
    │   │   ├── BreadcrumbHeader.vue
    │   │   ├── Button.vue
    │   │   ├── DesignCard.vue
    │   │   ├── Footer.vue
    │   │   ├── FormRadioButton.vue
    │   │   ├── Navabr.vue
    │   │   ├── NavbarHeaders.vue
    │   │   ├── NavigationNavbar.vue
    │   │   ├── NumberInput.vue
    │   │   ├── TargetingForm.vue
    │   │   └── TypeCard.vue
    │   ├── composables/
    │   │   ├── useApi.js
    │   │   └── useFetch.js
    │   ├── constants/
    │   │   ├── lists.js
    │   │   └── templates.js
    │   ├── main.js
    │   ├── router/
    │   │   └── index.js
    │   ├── store/
    │   │   └── index.js
    │   ├── style.css
    │   └── views/
    │       ├── BehaviourView.vue
    │       ├── ContentView.vue
    │       ├── DesignView.vue
    │       ├── TargetingView.vue
    │       └── TypeView.vue
    ├── tailwind.config.js
    └── vite.config.js

```

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ NodeJS > v18.16`

### 🔧 Installation

- Clone the sendx-frontend-iec2020097 repository:

```bash
git clone https://github.com/sauhard22/sendx-frontend-iec2020097

```

- Change to the project directory:

```bash
cd sendx-frontend-iec2020097
```

- Install the modules

```bash
npm install
```

### 🤖 Running the temporary server

```bash
cd db
json-server --watch db.json
```

### 🏃 Run the Vue Web App

- Go to the directory sendx-frontend-iec2020097 (you can go manually or)
```bash
cd..
```
- Run the porject
```bash
npm run dev
```

The web app will start running on http://localhost:5173 *(default)*

---

## ⚙️Folders 
You can go to the respective folders by clicking to know more details.
| Files                                                                                                                                                       
| ---                                                                                                                                                                          
| [components](https://github.com/sauhard22/sendx-frontend-iec2020097/tree/main/src/components)                                                                 
| [composables](https://github.com/sauhard22/sendx-frontend-iec2020097/tree/main/src/composables)                                                                                                  
| [router](https://github.com/sauhard22/sendx-frontend-iec2020097/tree/main/src/router)                                                                                             
| [views](https://github.com/sauhard22/sendx-frontend-iec2020097/tree/main/src/views)
| [store](https://github.com/sauhard22/sendx-frontend-iec2020097/tree/main/src/views)  
| [constants](https://github.com/sauhard22/sendx-frontend-iec2020097/tree/main/src/constants)        

---

## 👏 Acknowledgments

- I would like to express my gratitude to SendX for providing me with this amazing opportunity. Through this assignment, I have had the chance to learn a great deal. I am eagerly looking forward to working at SendX and tackling similar problems that can have a real impact on the world.

[**Return**](#Top)

---

