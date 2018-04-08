# Project Monitoring

:rocket: 📱 :speech_balloon: | Docker and all those new tools sometimes tricks you, right? So, to avoid customers calling me in the middle of night I've developed a simple script written in NodeJS to check if my projects are working properly. In case of failure, it sends a telegram message and project screenshot.

## Infrastructure Requirements

- Node.js >= v8.0.0
- yarn 1.5.1

## Initial Setup

##### On your terminal:

    $: cp config/config.dist.yml src/config/config.yml
    $: cp config/projects.dist.yml src/config/projects.yml
    $: yarn install

## Project Structure

```bash
.
└── application
    └── bin
        └── app.js
        └── scheduler.js
    └── config
        └── config.yml
        └── projects.yml
    └── logs
        └── application.log
    └── screenshots
    └── services
```


