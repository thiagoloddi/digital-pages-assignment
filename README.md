# digital-pages-assignment

In this application you can search information about marvel characters.

Demo: http://digital-pages.us-west-2.elasticbeanstalk.com/

- [Run with docker-compose](#run-with-docker-compose)
- [Run mannually](#run-manually-(development))

# Run with docker-compose
```bash
git clone git@github.com:thiagoloddi/digital-pages-assignment.git
cd digital-pages-assignment
docker-compose up
```

Access `localhost:8080` in your browser to start using the application.

# Run manually (development)

## Install
```bash
git clone git@github.com:thiagoloddi/digital-pages-assignment.git
cd digital-pages-assignment
npm install
```

## Build
```bash
npm run build # Run this command with environment variable `NODE_ENV='local'` to run in watch mode.
```

## Run
```bash
npm start
```

Or, for watch mode:
```bash
npm run dev
```

Access `localhost:8080` in your browser to start using the application.

# Tests
Run tests:
```bash
npm run test
```

Update snapshots:
```bash
npm run test:update
```