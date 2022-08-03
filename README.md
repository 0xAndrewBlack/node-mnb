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
    An awesome package to help you communicate with the MNB's SOAP API.
    <br />
    <a href="https://github.com/0xAndrewBlack/node-mnb"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/0xAndrewBlack/node-mnb">View Demo</a>
    ·
    <a href="https://github.com/0xAndrewBlack/node-mnb/issues">Report Bug</a>
    ·
    <a href="https://github.com/0xAndrewBlack/node-mnb/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The project started from a private software where I need to communicate and query up-to-date exchange information and it happened to be the MNB's SOAP API.

Why did I made it into a package?

Here's why:
* The SOAP protocol is kind of deprecated and clunky, I solve it by providing a cool package that gives you it in a JSON format, and some types for my beloved TypeScript fans. 💪
* Built-in types and cool documentation, unlike the official docs that you can't find anywhere if you ain't doing a google dork. LOL!
* I wanted to make a useful node package for a long time and this was a great opportunity. :smile:

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

The project is built with a few packages.

- `soap` - https://www.npmjs.com/package/soap
- `xml2js` - https://www.npmjs.com/package/xml2js

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This project is not affiliated with nor in contact with MNB.
The package is a basic SOAP API "proxy" to communicate easily with the MNB's API without the hassle of writing a pile of classes and types and what not.

Types are right out of the box for easy working in TypeScript.

### Prerequisites

Install the latest (at least v12) node, and install the package shown below.

* npm v12.x

  ```bash
  npm install npm@latest -g
  ```

### Installation

1. Install NPM packages

   ```sh
   npm install node-mnb
   ```
2. Use it

- In CommonJS:

  ```javascript
  const { getMnbCurrencies } = require('node-mnb');

  getMnbCurrencies().then((data) => console.log(data));
  ```
- In TypeScript (we have builtin types from `.d.ts`)

  ```javascript
  import { getMnbCurrencies } from 'node-mnb';

  getMnbCurrencies().then((data) => console.log(data));
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### getMnbCurrencies()

Get current queryable currencies.

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

Get current exchange rates.

>Note: The rates are calculated with it's unit so the corresponding unit per currency is calculated into it.

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

Get status and basic information about the API.

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

Get stored date interval.

```json
{
  "startDate": "1949-01-03",
  "endDate": "2022-08-03"
}
```

### getMnbHistoricalRates(startDate, endDate, currenciesString)

Get historical rates and units based on the supplied query.

For example query: 
```json
{
  "startDate": "2022-07-14",
  "endDate": "2022-08-03",
  "currencies": "EUR, USD, JPY"
}
```

Result:

```json
{
  "EUR": { "unit": 1, "rate": 396.01 },
  "JPY": { "unit": 100, "rate": 291.79 },
  "USD": { "unit": 1, "rate": 388.7 }
}
```

_For more examples, please refer to this `README.md` as a documentation._

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back-to-top links
- [x] Add Additional Templates w/ Examples
- [x] Add more tests.
- [ ] Add undocumented methods/actions and document them.
- [ ] Report useless features and methods to the MNB.

See the [open issues](https://github.com/0xAndrewBlack/node-mnb/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Refer to using conventional commits.

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m '✨ feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Wait. :D

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

The name `MNB` and corresponding logos are a trademark of MNB (Hungarian National Bank).

Distributed under the GPL v3 License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Andrew Black / Andras Fekete - [@itslemonandrew](https://twitter.com/itslemonandrew) - andras@fekete.io

Project Link: [https://github.com/0xAndrewBlack/node-mnb](https://github.com/0xAndrewBlack/node-mnb)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. 
I've included a few of my favorites to kick things off!

* [mondalaci](https://github.com/mondalaci/mnb-rates) - Starter WSDL method source.
* [Choose an Open Source License](https://choosealicense.com) - License template
* [README Template](https://github.com/othneildrew/Best-README-Template) - Readme template
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) - Emojis

<p align="right">(<a href="#top">back to top</a>)</p>

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