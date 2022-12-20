# Nomen est Omen API

Generate a random roman name.

## Requirements

- NodeJS >= v14

## Development

Start the app with:

```sh
npm start start:dev
```

## Docker

First build the app:

```sh
npm run build
```

Then build the Docker image:

```sh
docker build . -t yourname/nomen-est-omen-api
```

Then to run:

```sh
docker run -p 3000:3000 -d yourname/nomen-est-omen-api
```