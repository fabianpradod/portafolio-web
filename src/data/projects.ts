import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "flowdesk",
    title: "Flowdesk — Inventory Management API",
    headline: {
      en: "Production REST API, live on AWS EC2",
      es: "API REST en producción, desplegada en AWS EC2",
    },
    description: {
      en: "A production REST API backend for an inventory management system. JWT authentication, role-based access, Excel exports, and a Postman collection. Containerized with Docker Compose, CI via GitHub Actions, and deployed live on AWS EC2.",
      es: "Backend de API REST en producción para un sistema de gestión de inventario. Autenticación con JWT, control de acceso por roles, exportación a Excel y una colección de Postman. Contenerizado con Docker Compose, CI mediante GitHub Actions y desplegado en vivo en AWS EC2.",
    },
    tags: ["FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "JWT", "Docker", "AWS EC2", "CI"],
    repoUrl: "https://github.com/fabianpradod/flowdesk-bck",
    liveUrl: "https://flowdeskis.netlify.app/",
  },
  {
    id: "atelier-formal",
    title: "Atelier Formal — Store Management System",
    headline: {
      en: "Full-stack app with database roles & stored procedures",
      es: "App full-stack con roles de base de datos y procedimientos almacenados",
    },
    description: {
      en: "A full-stack web app for managing inventory, sales, and reports for a formal clothing store. Implements 5 PostgreSQL roles with granular GRANT/REVOKE permissions, 5 stored procedures with explicit transactions and ROLLBACK, and a role-aware frontend. Three Docker services: frontend, backend, and database.",
      es: "Aplicación web full-stack para gestionar inventario, ventas y reportes de una tienda de ropa formal. Implementa 5 roles de PostgreSQL con permisos granulares GRANT/REVOKE, 5 procedimientos almacenados con transacciones explícitas y ROLLBACK, y un frontend que se adapta al rol del usuario. Tres servicios Docker: frontend, backend y base de datos.",
    },
    tags: ["FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Docker", "RBAC", "Stored Procedures"],
    repoUrl: "https://github.com/fabianpradod/proyecto2-bd1/tree/proyecto-3",
  },
  {
    id: "lab8-web",
    title: "Password Strength Meter",
    headline: {
      en: "Real-time password evaluation, built with TDD",
      es: "Evaluación de contraseñas en tiempo real, construido con TDD",
    },
    description: {
      en: "A React app that evaluates and visually displays password strength in real time. Core logic lives in a typed utility and renders through a dedicated component, with unit tests covering both the logic and the component. Built with a strict test-driven workflow.",
      es: "Una app de React que evalúa y muestra visualmente la fortaleza de una contraseña en tiempo real. La lógica principal vive en una utilidad tipada y se renderiza a través de un componente dedicado, con pruebas unitarias que cubren tanto la lógica como el componente. Construido con un flujo estricto de desarrollo guiado por pruebas.",
    },
    tags: ["React 19", "TypeScript", "Vite", "Vitest", "Testing Library"],
    repoUrl: "https://github.com/fabianpradod/lab8-web",
  },
  {
    id: "lab9-mineria",
    title: "Neural Networks for Airbnb Pricing",
    headline: {
      en: "MLP classification and regression on listings data",
      es: "Clasificación y regresión con MLP sobre datos de listados",
    },
    description: {
      en: "Applied artificial neural networks to Airbnb listings data to classify properties into price tiers and predict continuous price via regression. Covers multiple model architectures, confusion matrices, overfitting analysis, and hyperparameter tuning.",
      es: "Aplicación de redes neuronales artificiales a datos de listados de Airbnb para clasificar propiedades en rangos de precio y predecir el precio continuo mediante regresión. Abarca múltiples arquitecturas de modelo, matrices de confusión, análisis de sobreajuste y ajuste de hiperparámetros.",
    },
    tags: ["Python", "scikit-learn", "MLP", "pandas", "matplotlib"],
    repoUrl: "https://github.com/Sofilayerdi/Lab9-Mineria",
  },
  {
    id: "lab10-mineria",
    title: "Semi-Supervised Learning — Bank Marketing",
    headline: {
      en: "Predicting term-deposit subscriptions with limited labels",
      es: "Predicción de suscripción a depósitos a plazo con etiquetas limitadas",
    },
    description: {
      en: "A semi-supervised learning lab on the UCI Bank Marketing dataset (45,211 records) predicting whether a client will subscribe to a term deposit. Covers data cleaning, handling of implicit nulls, feature encoding, and semi-supervised classifiers.",
      es: "Un laboratorio de aprendizaje semi-supervisado sobre el dataset UCI Bank Marketing (45,211 registros) que predice si un cliente se suscribirá a un depósito a plazo. Abarca limpieza de datos, manejo de nulos implícitos, codificación de variables y clasificadores semi-supervisados.",
    },
    tags: ["Python", "scikit-learn", "pandas", "numpy"],
    repoUrl: "https://github.com/Sofilayerdi/lab10-mineria",
  },
];