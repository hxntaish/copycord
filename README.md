<h1 align="center">CopyCord | © raven.ovh | 2023</h1>

## About

This repository contains:

-   [CopyCord HTTP API Server](/api)
-   [WebSocket Gateway Server](/gateway)
-   [HTTP CDN Server](/cdn)
-   [Utility and Database Models](/util)
-   [RTC Server](/rtc)
-   [WebRTC Server](/webrtc)
-   [Admin Dashboard WIP](/dashboard)

## Setup

```
#Download CopyCord
git clone https://github.com/hxntaish/copycord.git

#Navigate to project root 
cd copycord

#Install javascript packages
npm i

#Build and generate schema. Separately, they are `build` and `generate:schema`.
npm run setup

#Start the bundle server ( API, CDN, Gateway in one )
npm run start
```