Pull requests are always welcome!

# Contributing
- Clone this repo: `git clone https://github.com/vivshaw/jiburi-api.git`
- Watch your fave Ghibli films!
- Add data by changing `./src/seeder/data/{films, locations, people, species, vehicles}.json`
- or, help out in whatever other way you desire!
- Submit a pull request!

## Development Server
- Clone this repo: `git clone https://github.com/vivshaw/jiburi-api.git`
- `npm install`
- `npm build`
- Ensure you have PostgreSQL set up, that it has a table named "jiburi-nest", and that its credentials are configured in `ormconfig.json`
- `npm run db:migrate`
- `npm run db:seed`
- `npm start`
- Open `http://localhost:3000/graphql` for a [GraphQL Playground](https://github.com/graphql/graphql-playground)!

## What to contribute
The main thing that needs work is `./src/seeder/data`, which contains JSON files for films, locations, people, species, and vehicles. As you can see, there are a ton of missing resources. Here's how you can help:

- `./src/seeder/data`: 
    - Pick a Ghibli film!
    - Watch the film, and note the people, locations, species, and vehicles that you see.
    - Add these to `./src/seeder/data/{films, locations, people, species, vehicles}.json` while following the layout of the existing objects.
