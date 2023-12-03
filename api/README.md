<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/copycord/copycord/master/assets-rebrand/svg/copycord-Icon-Rounded-Subtract.svg" />
</p>
<h1 align="center">copycord HTTP API Server</h1>

<p>
  <a href="https://discord.gg/ZrnGQP6p3d">
    <img src="https://img.shields.io/discord/806142446094385153?color=7489d5&logo=discord&logoColor=ffffff" />
  </a>
  <img src="https://img.shields.io/static/v1?label=Status&message=Development&color=blue">
  <a title="Crowdin" target="_blank" href="https://translate.copycord.com/"><img src="https://badges.crowdin.net/copycord/localized.svg"></a>
   <a href="https://opencollective.com/copycord">
    <img src="https://opencollective.com/copycord/tiers/badge.svg">
  </a>
</p>

## [About](https://github.com/copycord/copycord/wiki)

This repository contains the copycord HTTP API Server

## Bug Tracker

[Project Board](https://copycord.notion.site/2c7fe9e73f9842d3bab3a4912dedd091)

## API

We use [express](https://expressjs.com/) for the HTTP Server and
[lambert-server](https://www.npmjs.com/package/lambert-server) for route handling and body validation (customized).

## Contribution

You should be familiar with:

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [MongoDB/mongoose](http://mongoosejs.com/)

and the other technologies we use

### Getting Started

Clone the Repository:

```bash
git clone https://github.com/copycord/copycord
cd copycord
```

#### Install (dev)dependencies:

```bash
npm install
npm install --only=dev
```

#### Starting:

```
npm start
```

#### Debugging:

**Vscode:**
The Launch file configuration is in `./vscode/launch.json`,
so you can just debug the server by pressing `F5` or the `> Launch Server` button
