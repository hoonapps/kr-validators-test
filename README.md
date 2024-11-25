<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[kr-validators](https://github.com/hoonapps/kr-validators) test app.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

```

#### URL:

```bash
http://localhost:3000/users
```

#### HTTP Method:

`POST`

#### Headers:

```bash
Content-Type: application/json
```

#### Body (JSON format):

##### Valid Data:

```json
{
  "email": "example@example.com",
  "phone": "010-1234-5678",
  "residentId": "9201011234567",
  "businessNumber": "1234567890",
  "postalCode": "06236"
}
```

##### Invalid Data:

```json
{
  "email": "not-an-email",
  "phone": "123",
  "residentId": "123456",
  "businessNumber": "12345",
  "postalCode": "123"
}
```

## 5. Expected Results

### 5.1 Valid Data

#### Response:

```json
{
  "message": "User created successfully",
  "data": {
    "email": "example@example.com",
    "phone": "010-1234-5678",
    "residentId": "9201011234567",
    "businessNumber": "1234567890",
    "postalCode": "06236"
  }
}
```

### 5.2 Invalid Data

#### Response:

```json
{
  "statusCode": 400,
  "message": [
    "유효한 이메일 주소를 입력해주세요.",
    "유효하지 않은 전화번호입니다.",
    "유효하지 않은 주민등록번호입니다.",
    "유효하지 않은 사업자등록번호입니다.",
    "유효하지 않은 우편번호입니다."
  ],
  "error": "Bad Request"
}
```

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## Author

Created by **hoonapps**.  
Visit the [GitHub Repository](https://github.com/hoonapps) for more projects.

---

### Need help?

Feel free to reach out at **didgns10@gmali.com** or create an issue in the repository!
