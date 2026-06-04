# Portafolio — Fabian Prado Dluzniewski

Este es mi portafolio personal. La idea es mostrar de una forma clara mis proyectos mas importantes, especialmente los que tienen que ver con backend, bases de datos, APIs, despliegue y tambien algunos trabajos de data science y frontend.

**Sitio en vivo:** https://portafolio-fabianpradod.netlify.app/

**Stack:** React · TypeScript · Vite · Netlify

---

## Como correrlo localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produccion en dist/
```

---

## Reflexion

### Para quien esta hecho este portafolio?

Este portafolio esta pensado mas que todo para empresas de software, startups o equipos tecnicos donde se valore backend, bases de datos, APIs y despliegue. No lo hice pensando en venderme como diseñador visual o como alguien enfocado solo en frontend bonito.

Mi trabajo actual esta bastante enfocado en data science, pero con este portafolio queria mostrar tambien la otra parte de lo que puedo hacer: construir backends ordenados, modelar bases de datos relacionales, usar Docker, manejar autenticacion, trabajar con permisos y desplegar aplicaciones reales.

Por eso puse primero proyectos como Flowdesk y Atelier Formal. Siento que esos proyectos explican mejor el tipo de trabajo que me interesa: sistemas estructurados, con logica real, base de datos y despliegue, no solo una interfaz bonita.

### Que tecnologias escogi y por que?

Para el portafolio use React, TypeScript y Vite, y lo desplegue en Netlify. Escogi eso porque el portafolio no tenia que ser el proyecto mas complejo del mundo, sino una pagina rapida, limpia y facil de mantener.

React me permite ordenar bien los componentes, TypeScript ayuda a tener mas control sobre el codigo, y Vite hace que el proyecto sea bastante simple de correr y compilar. Netlify tambien me parecio una buena opcion porque permite desplegar rapido y sin meterle complejidad innecesaria.

La parte tecnica mas fuerte esta realmente en los proyectos enlazados. Ahi se puede ver FastAPI, PostgreSQL, SQLAlchemy, Docker, JWT, roles de base de datos, procedimientos almacenados, transacciones y despliegue en EC2.

Tambien agregue un toggle de idioma entre ingles y espanol. No es una funcion enorme, pero si queria que estuviera bien hecha. Toda la pagina cambia de idioma usando React context, en vez de hacerlo de forma desordenada o duplicando componentes.

### Que tecnologia del curso decidi no usar demasiado?

Decidi no usar animaciones CSS complejas. Podia haber metido mas efectos, transiciones o animaciones al hacer scroll, pero senti que eso podia distraer del punto principal.

El portafolio no intenta demostrar que puedo hacer una pagina super llamativa visualmente, sino que puedo presentar proyectos tecnicos de forma clara. Por eso solo use animaciones simples y cuidadas, sin exagerar. Para este caso, creo que menos era mejor.

### Donde tome riesgos y donde fui mas seguro?

Fui bastante seguro con el stack del frontend. React, TypeScript y Vite son tecnologias conocidas, confiables y suficientes para este tipo de proyecto. No tenia sentido complicar la pagina solo por usar algo nuevo.

El riesgo estuvo mas en la forma de presentar los proyectos. En vez de llenar la pagina con muchos proyectos pequenos, preferi darle mas peso a los que muestran trabajo real de backend y base de datos. Por ejemplo, una API desplegada en AWS EC2 y un proyecto de PostgreSQL con roles, permisos, procedimientos y transacciones.

Tambien el toggle bilingue fue un riesgo pequeno, porque no queria que se volviera una distraccion. Lo mantuve simple, pero bien estructurado.

### Si tuviera una semana mas, que mejoraria?

- Agregaria un modo claro/oscuro para complementar el toggle de idioma.
- Haría paginas individuales para cada proyecto, con una explicacion mas completa.
- Revisaria accesibilidad con mas detalle, especialmente focus states, contraste y navegacion con teclado.
- Podria conectar el portafolio con una de mis propias APIs, para que al menos una parte de la pagina consuma datos reales y no solo informacion estatica.

---

## Proyectos destacados

| Proyecto | Enfoque | Repo |
|---------|---------|------|
| Flowdesk — Inventory Management API | API REST en produccion, desplegada en AWS EC2 | [flowdesk-bck](https://github.com/fabianpradod/flowdesk-bck) |
| Atelier Formal — Store Management | Roles de DB, procedimientos almacenados y transacciones | [proyecto2-bd1](https://github.com/fabianpradod/proyecto2-bd1/tree/proyecto-3) |
| Password Strength Meter | React/TS y desarrollo guiado por pruebas | [lab8-web](https://github.com/fabianpradod/lab8-web) |
| Neural Networks for Airbnb Pricing | Machine learning aplicado con MLP | [Lab9-Mineria](https://github.com/Sofilayerdi/Lab9-Mineria) |
| Semi-Supervised Learning | ML aplicado con datos de bank marketing | [lab10-mineria](https://github.com/Sofilayerdi/lab10-mineria) |
