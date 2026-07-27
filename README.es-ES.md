<div id="top"></div>

<div align="center">

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/0xAndrewBlack/node-mnb">
    <img src=".github/resources/MNB_logo.svg" alt="Logo" width="256" height="256">
  </a>

  <h3 align="center">node-mnb</h3>

  <p align="center">
    Un paquete increíble para ayudarte a comunicarte con la API SOAP del MNB.
    <br />
    <a href="https://github.com/0xAndrewBlack/node-mnb"><strong>Explora la documentación »</strong></a>
    <br />
    <br />
    <a href="https://github.com/0xAndrewBlack/node-mnb">Ver Demo</a>
    ·
    <a href="https://github.com/0xAndrewBlack/node-mnb/issues">Reportar Error</a>
    ·
    <a href="https://github.com/0xAndrewBlack/node-mnb/issues">Solicitar Funcionalidad</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el Proyecto</a>
      <ul>
        <li><a href="#built-with">Construido Con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Primeros Pasos</a>
      <ul>
        <li><a href="#prerequisites">Prerrequisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Hoja de Ruta</a></li>
    <li><a href="#contributing">Contribución</a></li>
    <li><a href="#license">Licencia</a></li>
    <li><a href="#contact">Contacto</a></li>
    <li><a href="#acknowledgments">Agradecimientos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre el Proyecto

El proyecto surgió de un software privado donde necesitaba comunicarme y consultar información de tipos de cambio actualizada, y resultó ser la API SOAP del MNB.

¿Por qué lo convertí en un paquete?

He aquí el porqué:
* El protocolo SOAP está un tanto obsoleto y es tosco; lo solucioné proporcionando un paquete genial que te entrega los datos en formato JSON, y algunos tipos para mis queridos fans de TypeScript. 💪
* Tipos integrados y documentación clara, a diferencia de la documentación oficial que no puedes encontrar en ningún lado si no haces un "google dork". ¡Jajaja!
* Quería crear un paquete de node útil desde hace tiempo y esta fue una gran oportunidad. :smile:

<p align="right">(<a href="#top">volver arriba</a>)</p>

### Construido Con

El proyecto está construido con algunos paquetes.

- `soap` - https://www.npmjs.com/package/soap
- `xml2js` - https://www.npmjs.com/package/xml2js

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- GETTING STARTED -->
## Primeros Pasos

Este proyecto no está afiliado ni tiene contacto con el MNB.
El paquete es un "proxy" básico de la API SOAP para comunicarse fácilmente con la API del MNB sin la molestia de escribir una pila de clases, tipos y demás.

Los tipos vienen integrados para facilitar el trabajo en TypeScript.

### Prerrequisitos

Instala la versión más reciente de node (al menos v12) e instala el paquete que se muestra a continuación.

* npm v12.x

  ```bash
  npm install npm@latest -g
  ```

### Instalación

1. Instalar paquetes NPM

   ```sh
   npm install node-mnb
   ```
2. Usarlo

- En CommonJS:

  ```javascript
  const { getMnbCurrencies } = require('node-mnb');

  getMnbCurrencies().then((data) => console.log(data));
  ```
- En TypeScript (tenemos tipos integrados desde `.d.ts`)

  ```javascript
  import { getMnbCurrencies } from 'node-mnb';

  getMnbCurrencies().then((data) => console.log(data));
  ```

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

### getMnbCurrencies()

Obtén las monedas actuales consultables.

```json
[
  "HUF", "EUR", "AUD", "BGN", "BRL",
  "CAD", "CHF", "CNY", "CZK", "DKK",
  "GBP", "HKD", "HRK", "IDR", "ILS",
  "INR", "ISK", "JPY", "KRW", "MXN",
  "MYR", "NOK", "NZD", "PHP", "PLN",
  "RON", "RSD", "RUB", "SEK", "SGD",
  "THB", "TRY", "UAH", "USD", "ZAR",
  "ATS", "AUP", "BEF", "BGL", "CSD",
  "CSK", "DDM", "DEM", "EEK", "EGP",
  "ESP", "FIM", "FRF", "GHP", "GRD",
  "IEP", "ITL", "KPW", "KWD", "LBP",
  "LTL", "LUF", "LVL", "MNT", "NLG",
  "OAL", "OBL", "OFR", "ORB", "PKR",
  "PTE", "ROL", "SDP", "SIT", "SKK",
  "SUR", "VND", "XEU", "XTR", "YUD"
]
```

### getMnbRates()

Obtén los tipos de cambio actuales.

>Nota: Las tasas se calculan con su unidad, por lo que la unidad correspondiente por moneda se calcula en el resultado.

```json
{
  "AUD": 269.37,
  "BGN": 202.47,
  "BRL": 73.63,
  "CAD": 302.26,
  "CHF": 405.23,
  "CNY": 57.55,
  "CZK": 16.07,
  "DKK": 53.2,
  "EUR": 396.01,
  "GBP": 473.36,
  "HKD": 49.52,
  "HRK": 52.68,
  "IDR": 0.026099999999999998,
  "ILS": 115.51,
  "INR": 4.92,
  "ISK": 2.84,
  "JPY": 2.9179000000000004,
  "KRW": 0.2964,
  "MXN": 18.79,
  "MYR": 87.21,
  "NOK": 40.01,
  "NZD": 243.25,
  "PHP": 6.98,
  "PLN": 84.22,
  "RON": 80.36,
  "RSD": 3.37,
  "RUB": 6.44,
  "SEK": 38.02,
  "SGD": 281.36,
  "THB": 10.72,
  "TRY": 21.64,
  "UAH": 10.52,
  "USD": 388.7,
  "ZAR": 23.23
}
```

### getMnbStatus()

Obtén el estado e información básica sobre la API.

```json
{
  "firstDate": "1949-01-03",
  "lastDate": "2022-08-03",
  "currencies": [
    "HUF", "EUR", "AUD", "BGN", "BRL",
    "CAD", "CHF", "CNY", "CZK", "DKK",
    "GBP", "HKD", "HRK", "IDR", "ILS",
    "INR", "ISK", "JPY", "KRW", "MXN",
    "MYR", "NOK", "NZD", "PHP", "PLN",
    "RON", "RSD", "RUB", "SEK", "SGD",
    "THB", "TRY", "UAH", "USD", "ZAR",
    "ATS", "AUP", "BEF", "BGL", "CSD",
    "CSK", "DDM", "DEM", "EEK", "EGP",
    "ESP", "FIM", "FRF", "GHP", "GRD",
    "IEP", "ITL", "KPW", "KWD", "LBP",
    "LTL", "LUF", "LVL", "MNT", "NLG",
    "OAL", "OBL", "OFR", "ORB", "PKR",
    "PTE", "ROL", "SDP", "SIT", "SKK",
    "SUR", "VND", "XEU", "XTR", "YUD"
  ]
}
```

### getMnbDateInterval()

Obtén el intervalo de fechas almacenadas.

```json
{
  "startDate": "1949-01-03",
  "endDate": "2022-08-03"
}
```

### getMnbHistoricalRates(startDate, endDate, currenciesString)

Obtén tasas históricas y unidades basadas en la consulta suministrada.

Por ejemplo, consulta: 
```json
{
  "startDate": "2022-07-14",
  "endDate": "2022-08-03",
  "currencies": "EUR, USD, JPY"
}
```

Resultado:

```json
{
  "EUR": { "unit": 1, "rate": 396.01 },
  "JPY": { "unit": 100, "rate": 291.79 },
  "USD": { "unit": 1, "rate": 388.7 }
}
```

_Para más ejemplos, por favor utiliza este `README.md` como documentación._

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- ROADMAP -->

## Hoja de Ruta

- [x] Agregar Registro de Cambios (Changelog)
- [x] Agregar enlaces de "volver arriba"
- [x] Agregar Plantillas Adicionales con Ejemplos
- [x] Agregar más pruebas.
- [ ] Agregar métodos/acciones no documentados y documentarlos.
- [ ] Reportar funciones y métodos inútiles al MNB.

Consulta los [problemas abiertos](https://github.com/0xAndrewBlack/node-mnb/issues) para obtener una lista completa de las funciones propuestas (y problemas conocidos).

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- CONTRIBUTING -->
## Contribución

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirarse y crear. Cualquier contribución que realices es **muy apreciada**.

Si tienes una sugerencia que pueda mejorar esto, por favor haz un fork del repositorio y crea un pull request. También puedes simplemente abrir un issue con la etiqueta "enhancement".

Se recomienda el uso de conventional commits.

¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

1. Haz un Fork del Proyecto
2. Crea tu Rama de Funcionalidad (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m '✨ feat: Add some AmazingFeature'`)
4. Sube los cambios a la Rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
6. Espera. :D

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- LICENSE -->
## Licencia

El nombre `MNB` y los logotipos correspondientes son marca registrada de MNB (Banco Nacional de Hungría).

Distribuido bajo la Licencia GPL v3. Consulta `LICENSE.md` para más información.

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- CONTACT -->
## Contacto

Andrew Black / Andras Fekete - [@itslemonandrew](https://twitter.com/itslemonandrew) - andras@fekete.io

Enlace al Proyecto: [https://github.com/0xAndrewBlack/node-mnb](https://github.com/0xAndrewBlack/node-mnb)

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Agradecimientos

Usa este espacio para enumerar los recursos que encuentres útiles y a los que te gustaría dar crédito.
¡He incluido algunos de mis favoritos para empezar!

* [mondalaci](https://github.com/mondalaci/mnb-rates) - Fuente del método WSDL inicial.
* [Choose an Open Source License](https://choosealicense.com) - Plantilla de Licencia
* [README Template](https://github.com/othneildrew/Best-README-Template) - Plantilla de Readme
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) - Emojis

<p align="right">(<a href="#top">volver arriba</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/0xAndrewBlack/node-mnb.svg?style=for-the-badge
[contributors-url]: https://github.com/0xAndrewBlack/node-mnb/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/0xAndrewBlack/node-mnb.svg?style=for-the-badge
[forks-url]: https://github.com/0xAndrewBlack/node-mnb/network/members
[stars-shield]: https://img.shields.io/github/stars/0xAndrewBlack/node-mnb.svg?style=for-the-badge
[stars-url]: https://github.com/0xAndrewBlack/node-mnb/stargazers
[issues-shield]: https://img.shields.io/github/issues/0xAndrewBlack/node-mnb.svg?style=for-the-badge
[issues-url]: https://github.com/0xAndrewBlack/node-mnb/issues
[license-shield]: https://img.shields.io/github/license/0xAndrewBlack/node-mnb.svg?style=for-the-badge
[license-url]: https://github.com/0xAndrewBlack/node-mnb/blob/master/LICENSE.md
