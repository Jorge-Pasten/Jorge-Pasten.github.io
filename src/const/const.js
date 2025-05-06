export const studies = [
  {
    title: "Bootcamp de QA Engineer",
    corporation: "TripleTen - Remoto",
    date: "09/2024 – 02/2025",
  }/*,
  {
    title: "Desarrollador Front-end React Js",
    corporation: "Alura Latam - Remoto",
    date: "04/2023 – 09/2023",
  },
  {
    title: "Curso profesional de React Js",
    corporation: "Código facilito - Remoto",
    date: "04/2023 – 04/2023",
  },*/
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  selenium:"selenium",
  postman: "postman",
  python: "python",
  jira: "jira",
  devtools: "devtools",
  pytest: "pytest",
  postgressql: "postgressql",
  androidstudio: "androidstudio",
  // here add more icon keys
};

export const skills = [
  {
    title: "Selenium",
    icon: IconKeys.selenium,
  },
  {
    title: "Postman",
    icon: IconKeys.postman,
  },
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "Jira",
    icon: IconKeys.jira,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "DevTools",
    icon: IconKeys.devtools,
  },
  {
    title: "Pyest",
    icon: IconKeys.pytest,
  },
  {
    title: "PostgresSQL",
    icon: IconKeys.postgressql,
  },
  {
    title: "Android Studio",
    icon: IconKeys.androidstudio,
  },
];

export const projects = [
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Urban Routes - Pruebas Automatizadas con Selenium y Pytest",
    link: "https://github.com/Jorge-Pasten/qa-project-Urban-Routes-es.git",
    description: `Automatización de pruebas con Selenium y Pytest para validar el flujo completo de solicitud de taxi, incluyendo selección de ruta, tarifa, servicios adicionales y pago. Cobertura de casos críticos como ingreso de dirección, validación de teléfono, tarjeta de crédito y visualización del modal de búsqueda. Código versionado con Git y ejecutable en entorno local con Python y Google Chrome.`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.pytest,
      },
      {
        icon: IconKeys.selenium,
      },
      {
        icon: IconKeys.git,
      },
      {
        icon: IconKeys.github,
      },
    ],
  },
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Urban Grocers - Pruebas Automatizadas con Pytest",
    link: "https://github.com/Jorge-Pasten/qa-project-Urban-Grocers-app-es.git",
    description: `Automatización de pruebas con Pytest y Requests para verificar la funcionalidad de creación de kits de productos en la API de Urban Grocers. Se implementaron pruebas positivas y negativas enfocadas en la validación del campo name, evaluando comportamiento ante entradas válidas, vacías, con caracteres especiales, números y tipos incorrectos. El proyecto incluye estructura modular, control de versiones con Git y ejecución local mediante Python y entorno virtual.`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.pytest,
      },
      {
        icon: IconKeys.git,
      },
      {
        icon: IconKeys.github,
      },
    ],
  },
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Urban.Lunch - Pruebas de QA para Aplicación Móvil",
    link: "https://github.com/Jorge-Pasten/qa-project-Urban.Lunch-app.git",
    description: `Pruebas funcionales y de usabilidad en la primera versión de Urban.Lunch para Android, una app que permite pedir platillos de restaurantes locales y recogerlos en puntos designados. Se verificaron funciones clave como selección de punto de recogida, elección y confirmación de platillos, seguimiento del pedido y manejo de errores. Las pruebas se ejecutaron en emulador y dispositivo Android, con documentación en Google Docs y reporte de bugs en Jira. El trabajo permitió identificar mejoras clave para optimizar la experiencia del usuario antes del lanzamiento.`,
    technologies: [
      {
        icon: IconKeys.androidstudio,
      },
      {
        icon: IconKeys.Jira,
      },
    ],
  },
];
