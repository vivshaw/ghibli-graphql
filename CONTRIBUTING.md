Pull requests are always welcome!

# Contributing

- Clone this repo: `git clone https://github.com/vivshaw/jiburi-api.git`
- Watch your fave Ghibli films! Then add data by changing `./src/seeder/data/{films, locations, people, species, vehicles}.json`
- Or, help out in whatever other way you desire.
- Submit a pull request!

## Dev Server

- Clone this repo: `git clone https://github.com/vivshaw/jiburi-api.git`
- `npm install`
- Ensure you have [PostgreSQL](https://www.postgresql.org/) set up, and that `POSTGRES_HOST`, `POSTGRES_USERNAME`, `POSTGRES_PASSWORD`, and `POSTGRES_DATABASE` are available as environment variables. I recommend [dotenv](https://www.npmjs.com/package/dotenv).
- Ensure you have Redis set up, and provide `REDIS_URL` as an environment variable.
- `npm run db:reset` to set up the DB and seed it with the data. If you change the JSON data, you will need to re-run this to seed the DB.
- `npm run start:dev` to hoist your dev server. In dev mode, NestJS will watch for changes and restart as needed.
- Pop on over to `http://localhost:3000/` for a [GraphQL Playground](https://github.com/graphql/graphql-playground)!

## What needs doing

The main thing that needs work is `./src/seeder/data/`, which contains JSON files for films, locations, people, species, and vehicles. As you can see, there are a ton of missing resources. Here's how you can help:

- `./src/seeder/data/`:
  - Pick a Ghibli film! Enjoy your watch, and note the people, locations, species, and vehicles that you see.
  - Add these to `./src/seeder/data/{films, locations, people, species, vehicles}.json`, following the layout you see in those files. As you'll see, most data types are simple JSON data corresponding to the scalar types you see in [the GraphQL schema](https://github.com/vivshaw/ghibli-graphql/blob/main/src/schema.gql). Of note, you must reference other objects via their UUID.
