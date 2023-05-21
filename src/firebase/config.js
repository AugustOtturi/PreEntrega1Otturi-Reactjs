import { initializeApp } from 'firebase/app';
import { getFirestore, doc, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAUIcgR9aVxsbncbPa5bPx4TjkqLT_oxM8',
    authDomain: 'reactjscoderhouse-a81ed.firebaseapp.com',
    projectId: 'reactjscoderhouse-a81ed',
    storageBucket: 'reactjscoderhouse-a81ed.appspot.com',
    messagingSenderId: '329128339152',
    appId: '1:329128339152:web:723ef2ebdaf0b5750e60d5',
};

const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// console.log(db);

// (async () => {
//     const cursos = [
//         {
//             name: 'Programación en Python',
//             teacher: 'Profesor Pérez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
//             schedule: 'Lunes y Miércoles de 18:00 a 20:00 hs',
//             difficulty: 'Facil',
//             category: 'frontend',
//             price: 5000,
//             description:
//                 '¡Bienvenidos al apasionante mundo de la programación en Python! Este curso te llevará desde los fundamentos hasta las técnicas avanzadas de este lenguaje versátil. A través de ejemplos prácticos y proyectos interesantes, adquirirás habilidades en el manejo de estructuras de datos, control de flujo, funciones, módulos y bibliotecas. Python se utiliza en áreas como inteligencia artificial, análisis de datos, desarrollo web y automatización de tareas. Tanto si eres principiante como experimentado, este curso te brindará una sólida base para alcanzar tus metas. ¡No te pierdas la oportunidad de convertirte en un experto en Python y abrir un mundo de posibilidades!',
//         },
//         {
//             name: 'React Native',
//             teacher: 'Profesora Gómez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
//             schedule: 'Martes y Jueves de 19:00 a 21:00 hs',
//             difficulty: 'Media',
//             category: 'frontend',
//             price: 7500,
//             description:
//                 '¡Bienvenidos al emocionante mundo de React Native! En este curso, te sumergirás en el desarrollo de aplicaciones móviles multiplataforma utilizando la poderosa combinación de JavaScript y React. Aprenderás a construir interfaces de usuario dinámicas y fluidas, aprovechando al máximo los componentes reutilizables y las API nativas de dispositivos móviles. Con ejercicios prácticos y proyectos desafiantes, adquirirás habilidades en la navegación, gestión de estado y acceso a características del dispositivo. React Native es ampliamente utilizado en la industria y te abrirá puertas en el mundo del desarrollo móvil. ¡No pierdas la oportunidad de convertirte en un desarrollador de aplicaciones móviles de primera clase!',
//         },
//         {
//             name: 'Programación en Java',
//             teacher: 'Profesor Martínez',
//             link: 'https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.png',
//             schedule: 'Miércoles y Viernes de 17:00 a 19:00 hs',
//             difficulty: 'Dificil',
//             category: 'backend',
//             price: 6000,
//             description:
//                 '¡Bienvenidos al fascinante mundo de la programación en Java! Este curso te llevará desde los conceptos básicos hasta las técnicas avanzadas de programación en Java. A través de ejemplos prácticos y proyectos interesantes, desarrollarás habilidades en el manejo de estructuras de datos, control de flujo, funciones, clases, herencia y polimorfismo. Java es uno de los lenguajes de programación más populares en el mundo, utilizado en áreas como el desarrollo de aplicaciones empresariales, aplicaciones móviles, videojuegos y más. Ya sea que seas principiante o experimentado, este curso te brindará una sólida base para alcanzar tus metas en el mundo de la programación en Java. ¡No te pierdas la oportunidad de convertirte en un experto en Java y alcanzar tus objetivos profesionales!',
//         },
//         {
//             name: 'Desarrollo web con Node.js',
//             teacher: 'Profesor Rodríguez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
//             schedule: 'Lunes y Miércoles de 19:00 a 21:00 hs',
//             difficulty: 'Media',
//             category: 'backend',
//             price: 8000,
//             description:
//                 '¡Bienvenidos al apasionante mundo del desarrollo web con Node.js! En este curso, aprenderás a construir aplicaciones web altamente escalables y eficientes utilizando JavaScript en el servidor. Explorarás los fundamentos de Node.js y su ecosistema de módulos, así como el uso de Express.js para crear rutas y controladores. Aprenderás a trabajar con bases de datos, implementar autenticación de usuarios y utilizar APIs externas. Además, descubrirás cómo desplegar tus aplicaciones en la nube y optimizar su rendimiento. Con Node.js, podrás desarrollar aplicaciones web modernas y potentes. ¡No pierdas la oportunidad de dominar esta tecnología clave y abrirte a infinitas posibilidades en el desarrollo web!',
//         },
//         {
//             name: 'Basica programación',
//             teacher: 'Profesora García',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/640px-Desktop_computer_clipart_-_Yellow_theme.svg.png',
//             schedule: 'Martes y Jueves de 18:00 a 20:00 hs',
//             difficulty: 'Facil',
//             category: 'frontend',
//             price: 4000,
//             description:
//                 '¡Bienvenidos al emocionante mundo de la programación básica! En este curso, aprenderás los conceptos fundamentales de la programación y adquirirás habilidades esenciales para resolver problemas mediante algoritmos. Explorarás la lógica de programación, estructuras de control como bucles y condicionales, manipulación de variables y tipos de datos. Además, te familiarizarás con la depuración de errores y la creación de programas simples. Este curso es ideal para principiantes y aquellos que deseen comprender los principios básicos de la programación. ¡No pierdas la oportunidad de dar tus primeros pasos en el mundo de la programación y abrir un mundo de posibilidades creativas y profesionales!',
//         },
//         {
//             name: 'Videojuegos con Unity',
//             teacher: 'Profesor Fernández',
//             link: 'https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-png-transparent.png',
//             schedule: 'Sábados y Domingos de 10:00 a 14:00 hs',
//             difficulty: 'Dificil',
//             category: 'frontend',
//             price: 9000,
//             description:
//                 '¡Bienvenidos al emocionante mundo de los videojuegos con Unity! En este curso, te sumergirás en el desarrollo de juegos y explorarás las herramientas poderosas que ofrece Unity. Aprenderás a crear entornos interactivos, diseñar personajes, implementar físicas realistas y desarrollar mecánicas de juego emocionantes. Dominarás el lenguaje de programación C# y utilizarás scripts para controlar el comportamiento de tus juegos. Además, descubrirás cómo optimizar el rendimiento, implementar efectos visuales y trabajar en equipo utilizando el motor Unity. Convierte tus ideas en experiencias jugables y descubre el emocionante campo de los videojuegos con este curso. ¡No pierdas la oportunidad de crear tus propios juegos y cautivar a los jugadores de todo el mundo!',
//         },
//         {
//             name: 'Programación en C++',
//             teacher: 'Profesor Torres',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
//             schedule: 'Martes y Jueves de 17:00 a 19:00 hs',
//             difficulty: 'Dificil',
//             category: 'backend',
//             price: 6500,
//             description:
//                 '¡Bienvenidos al mundo apasionante de la programación en C++! Este curso te llevará desde los conceptos básicos hasta las técnicas avanzadas de programación en uno de los lenguajes más poderosos y versátiles. A través de ejemplos prácticos y proyectos desafiantes, adquirirás habilidades en el manejo de estructuras de datos, algoritmos eficientes, programación orientada a objetos y programación genérica. Descubrirás cómo trabajar con bibliotecas estándar, depurar y optimizar tu código. Ya sea que desees iniciar en la programación o expandir tus habilidades existentes, este curso te brindará una base sólida para desarrollar aplicaciones robustas y eficientes en C++. ¡No pierdas la oportunidad de dominar este lenguaje esencial en la industria de la programación!',
//         },
//         {
//             name: 'Programación web',
//             teacher: 'Profesor García',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
//             schedule: 'Martes y Jueves de 15:00 a 17:00 hs',
//             difficulty: 'Media',
//             category: 'frontend',
//             price: 4000,
//             description:
//                 '¡Bienvenidos al fascinante mundo de la programación web! En este curso, explorarás los fundamentos esenciales para desarrollar sitios web dinámicos y atractivos. Aprenderás los lenguajes clave como HTML, CSS y JavaScript, y descubrirás cómo utilizar frameworks populares como React.js o Angular.js. Adquirirás conocimientos sobre diseño responsivo, interacción con bases de datos, autenticación de usuarios y creación de APIs. Además, comprenderás los conceptos de SEO y optimización de rendimiento web. Ya sea que desees crear tu propio sitio web o desarrollar aplicaciones web complejas, este curso te proporcionará las habilidades necesarias para triunfar en la programación web. ¡No pierdas la oportunidad de convertirte en un experto en el desarrollo web y marcar tu presencia en línea!',
//         },
//         {
//             name: 'Desarrollo web con Angular',
//             teacher: 'Profesor Fernández',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
//             schedule: 'Lunes y Miércoles de 19:00 a 21:00 hs',
//             difficulty: 'Dificil',
//             category: 'frontend',
//             price: 5500,
//             description:
//                 '¡Bienvenidos al emocionante mundo del desarrollo web con Angular! En este curso, aprenderás a construir aplicaciones web robustas y de alto rendimiento utilizando el poderoso framework de Angular. Explorarás los conceptos fundamentales de Angular, como los componentes, directivas y servicios, y descubrirás cómo trabajar con el sistema de enrutamiento y la gestión de estados. Aprenderás a interactuar con APIs externas, implementar autenticación de usuarios y crear interfaces de usuario dinámicas utilizando Angular Material. Además, descubrirás cómo desplegar tus aplicaciones en la nube y optimizar su rendimiento. Con Angular, podrás desarrollar aplicaciones web modernas y escalables. ¡No pierdas la oportunidad de dominar esta tecnología clave y destacar en el desarrollo web!',
//         },
//         {
//             name: 'Inteligencia Artificial con Python',
//             teacher: 'Profesor Rodríguez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
//             schedule:
//                 'Viernes de 10:00 a 13:00 hs y Domingo de 10:00 a 12:00 hs',
//             difficulty: 'Facil',
//             category: 'backend',
//             price: 6500,
//             description:
//                 '¡Bienvenidos al fascinante mundo de la Inteligencia Artificial con Python! En este curso, explorarás los fundamentos y técnicas avanzadas de la IA utilizando Python como lenguaje principal. Aprenderás sobre algoritmos de aprendizaje automático, como regresión, clasificación, agrupamiento y redes neuronales. Dominarás bibliotecas populares como TensorFlow y PyTorch para crear modelos de IA sofisticados. Descubrirás cómo aplicar técnicas de procesamiento de lenguaje natural y visión por computadora para resolver problemas reales. Además, explorarás el mundo de la IA ética y responsable. Ya sea que desees incursionar en la IA o mejorar tus habilidades existentes, este curso te proporcionará las herramientas necesarias para crear soluciones innovadoras en el campo de la Inteligencia Artificial con Python. ¡No pierdas la oportunidad de ser parte de la revolución de la IA!',
//         },
//         {
//             name: 'Desarrollo de videojuegos en Unity',
//             teacher: 'Profesor López',
//             link: 'https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-png-transparent.png',
//             schedule: 'Martes y Jueves de 17:00 a 19:00 hs',
//             difficulty: 'Media',
//             category: 'frontend',
//             price: 4500,
//             description:
//                 '¡Bienvenidos al apasionante mundo del desarrollo de videojuegos con Unity! En este curso, aprenderás a crear juegos increíbles utilizando la potente plataforma de desarrollo Unity. Explorarás los fundamentos del diseño de juegos, creación de escenas, manipulación de objetos, implementación de físicas y creación de animaciones. Dominarás la programación en C# para controlar el comportamiento de tus juegos y crear mecánicas emocionantes. Aprenderás a trabajar con sonidos, efectos visuales y optimización de rendimiento. Además, descubrirás cómo publicar tus juegos en múltiples plataformas. Ya sea que quieras convertirte en un desarrollador de videojuegos profesional o simplemente crear tus propios juegos, este curso te brindará las habilidades y conocimientos necesarios para triunfar en el mundo del desarrollo de videojuegos con Unity. ¡No pierdas la oportunidad de dar vida a tus ideas y cautivar a jugadores de todo el mundo!',
//         },
//         {
//             name: 'Programación de aplicaciones para Android',
//             teacher: 'Profesor García',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg',
//             schedule: ' y Domingos de 10:00 a 12:00 hs',
//             difficulty: 'Dificil',
//             category: 'frontend',
//             price: 5000,
//             description:
//                 '¡Bienvenidos al emocionante mundo de la programación de aplicaciones para Android! En este curso, te sumergirás en el desarrollo de aplicaciones móviles para la plataforma Android utilizando Java o Kotlin como lenguaje principal. Aprenderás a crear interfaces de usuario interactivas, implementar funcionalidades avanzadas y aprovechar las API de Android. Dominarás conceptos como el manejo de actividades, fragmentos, bases de datos, notificaciones y geolocalización. Además, descubrirás cómo publicar tus aplicaciones en Google Play Store. Ya sea que desees convertirte en un desarrollador de aplicaciones móviles profesional o crear tus propias apps, este curso te brindará las habilidades necesarias para triunfar en el mundo del desarrollo de aplicaciones para Android. ¡No pierdas la oportunidad de dar vida a tus ideas y alcanzar a millones de usuarios en todo el mundo!',
//         },
//         {
//             name: 'Machine Learning con R',
//             teacher: 'Profesora Fernández',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1024px-R_logo.svg.png',
//             schedule: 'Miércoles y Sabados de 18:00 a 21:00 hs',
//             difficulty: 'Facil',
//             category: 'backend',
//             price: 6000,
//             description:
//                 '¡Bienvenidos al apasionante mundo del Machine Learning con R! En este curso, explorarás los fundamentos y técnicas avanzadas del aprendizaje automático utilizando el lenguaje R. Aprenderás sobre algoritmos de clasificación, regresión, agrupamiento y procesamiento de texto. Dominarás bibliotecas populares como caret, randomForest y keras para construir modelos de Machine Learning poderosos. Descubrirás cómo evaluar y optimizar tus modelos, así como técnicas de feature engineering. Además, explorarás el análisis de datos y visualización para comprender mejor tus resultados. Ya sea que desees iniciarte en el campo del Machine Learning o ampliar tus conocimientos existentes, este curso te proporcionará las habilidades necesarias para aplicar con éxito el Machine Learning utilizando R. ¡No pierdas la oportunidad de ser parte de la revolución del Machine Learning!',
//         },
//         {
//             name: 'Desarrollo Ruby on Rails',
//             teacher: 'Profesor Pérez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
//             schedule: 'Lunes y Miércoles de 16:00 a 18:00 hs',
//             difficulty: 'Media',
//             category: 'backend',
//             price: 5500,
//             description:
//                 '¡Bienvenidos al apasionante mundo del desarrollo con Ruby on Rails! En este curso, aprenderás a construir aplicaciones web robustas y elegantes utilizando el framework Ruby on Rails. Explorarás los conceptos fundamentales de Rails, como el enrutamiento, controladores, vistas y modelos. Aprenderás a interactuar con bases de datos utilizando ActiveRecord, implementar autenticación de usuarios y trabajar con APIs externas. Además, descubrirás cómo diseñar interfaces de usuario atractivas utilizando HTML, CSS y Bootstrap. Con Ruby on Rails, podrás desarrollar aplicaciones web de forma rápida y eficiente. ¡No pierdas la oportunidad de dominar esta tecnología clave y convertirte en un experto en el desarrollo web con Ruby on Rails!',
//         },
//         {
//             name: 'Programación orientada a objetos con Java',
//             teacher: 'Profesor López',
//             link: 'https://rafaelsantiagocruz.com/wp-content/uploads/2020/10/Rafael-Santiago-Cruz-Java.png',
//             schedule: 'Martes y Jueves de 19:00 a 21:00 hs',
//             difficulty: 'Dificil',
//             category: 'frontend',
//             price: 5000,
//             description:
//                 '¡Bienvenidos al mundo de la programación orientada a objetos con Java! En este curso, explorarás los fundamentos y principios clave de la programación orientada a objetos utilizando el lenguaje de programación Java. Aprenderás a diseñar clases, crear objetos, implementar herencia y polimorfismo, y trabajar con interfaces y abstracciones. Dominarás conceptos como encapsulación, modularidad y reutilización de código. A través de ejemplos prácticos y proyectos desafiantes, adquirirás habilidades para desarrollar aplicaciones escalables y mantenibles. Java es ampliamente utilizado en la industria, desde el desarrollo de aplicaciones empresariales hasta la creación de sistemas embebidos. ¡No pierdas la oportunidad de convertirte en un experto en programación orientada a objetos con Java y desbloquear un mundo de posibilidades profesionales!',
//         },
//         {
//             name: 'Desarrollo de aplicaciones con React',
//             teacher: 'Profesor García',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
//             schedule: 'Lunes y Miércoles de 17:00 a 19:00 hs',
//             difficulty: 'Facil',
//             category: 'frontend',
//             price: 6000,
//             description:
//                 '¡Bienvenidos al emocionante mundo del desarrollo de aplicaciones con React! En este curso, te sumergirás en la creación de aplicaciones web modernas y escalables utilizando el framework de JavaScript, React. Aprenderás los conceptos fundamentales de React, como componentes, estado, props y enrutamiento. Dominarás la creación de interfaces de usuario dinámicas y receptivas utilizando JSX y CSS en línea. Además, descubrirás cómo trabajar con bibliotecas populares como React Router y Redux para administrar el estado de tu aplicación de manera eficiente. Con React, podrás desarrollar aplicaciones interactivas y de alto rendimiento. ¡No pierdas la oportunidad de dominar esta tecnología clave y convertirte en un desarrollador de aplicaciones web con React!',
//         },
//         {
//             name: 'Introducción a la programación en C',
//             teacher: 'Profesor Pérez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
//             schedule: 'Jueves y Viernes de 17:00 a 19:00 hs',
//             difficulty: 'Media',
//             category: 'frontend',
//             price: 4500,
//             description:
//                 '¡Bienvenidos al mundo de la programación en C! En este curso de introducción, te familiarizarás con los conceptos básicos de programación utilizando el lenguaje C. Aprenderás sobre la sintaxis de C, variables, tipos de datos, operadores y estructuras de control como bucles y condicionales. Explorarás la manipulación de arreglos y punteros, así como la creación de funciones y estructuras de datos simples. Con ejemplos prácticos y ejercicios, adquirirás habilidades fundamentales para resolver problemas mediante la programación en C. Este curso es ideal para principiantes que deseen dar sus primeros pasos en el mundo de la programación y sentar bases sólidas para futuros desafíos. ¡No pierdas la oportunidad de adentrarte en la programación en C y abrirte a nuevas posibilidades!',
//         },
//         {
//             name: 'Desarrollo web con Node.js y Javascript',
//             teacher: 'Profesor Fernández',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
//             schedule: 'Martes y Jueves de 16:00 a 18:00 hs',
//             difficulty: 'Dificil',
//             category: 'frontend',
//             price: 5500,
//             description:
//                 '¡Bienvenidos al apasionante mundo del desarrollo web con Node.js y JavaScript! En este curso, aprenderás a construir aplicaciones web modernas y escalables utilizando la potencia de Node.js y JavaScript en el servidor y en el navegador. Explorarás los fundamentos del desarrollo web, incluyendo la creación de servidores, el enrutamiento de URLs, la manipulación de bases de datos y la implementación de autenticación de usuarios. Además, descubrirás cómo utilizar tecnologías frontend como HTML, CSS y JavaScript para crear interfaces interactivas y atractivas. Con Node.js y JavaScript, podrás crear aplicaciones web completas de principio a fin. ¡No pierdas la oportunidad de dominar estas tecnologías esenciales y destacar en el desarrollo web moderno!',
//         },
//         {
//             name: 'Programación en Python para Ciencia de Datos',
//             teacher: 'Profesora García',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
//             schedule: 'Sábados y Domingos de 12:00 a 14:00 hs',
//             difficulty: 'Facil',
//             category: 'backend',
//             price: 6500,
//             description:
//                 '¡Bienvenidos al emocionante mundo de la programación en Python para Ciencia de Datos! En este curso, aprenderás a utilizar Python y sus bibliotecas especializadas, como NumPy, Pandas y Matplotlib, para realizar análisis de datos, manipulación de estructuras de datos, visualización y modelado predictivo. Adquirirás habilidades en limpieza y preparación de datos, exploración de conjuntos de datos, extracción de características y selección de modelos adecuados. Descubrirás cómo aplicar algoritmos de aprendizaje automático y crear modelos de regresión, clasificación y agrupamiento. Ya sea que desees incursionar en la ciencia de datos o mejorar tus habilidades existentes, este curso te proporcionará las herramientas necesarias para explorar, analizar y extraer información valiosa de los datos utilizando Python. ¡No pierdas la oportunidad de adentrarte en el mundo de la ciencia de datos y aprovechar su potencial!',
//         },
//         {
//             name: 'Desarrollo de aplicaciones para iOS con Swift',
//             teacher: 'Profesor Rodríguez',
//             link: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg',
//             schedule: 'Lunes y Miércoles de 18:00 a 20:00 hs',
//             difficulty: 'Media',
//             category: 'frontend',
//             price: 5000,
//             description:
//                 '¡Bienvenidos al emocionante mundo del desarrollo de aplicaciones para iOS con Swift! En este curso, te sumergirás en la creación de aplicaciones nativas para dispositivos iOS utilizando el poderoso lenguaje de programación Swift. Aprenderás los conceptos fundamentales de Swift, como variables, constantes, tipos de datos y estructuras de control. Explorarás la interfaz de desarrollo de Xcode y descubrirás cómo diseñar interfaces de usuario atractivas utilizando Storyboards y Auto Layout. Dominarás la implementación de funcionalidades, la interacción con bases de datos y la integración de servicios externos. Con Swift, podrás crear aplicaciones fluidas y de alto rendimiento para iPhones e iPads. ¡No pierdas la oportunidad de dominar esta tecnología clave y convertirte en un desarrollador de aplicaciones para iOS con Swift!',
//         },
//     ];
//     const promises = cursos.map((data) =>
//         addDoc(collection(db, 'cursos'), data)
//     );
//     const results = await Promise.all(promises);
// })();

export const iniciarFirebase = () => app;
