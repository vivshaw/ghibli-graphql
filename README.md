<p align="center">
  <a href="https://ghibli-graphql.herokuapp.com/" target="blank"><img src="ghibli-graphql.png" width="360" alt="Ghibli Graphql API" /></a>
</p>
<p align="center">An unofficial <a href="https://graphql.org/" target="_blank">GraphQL</a> API for information about the worlds of <a href="https://www.ghibli.jp/" target=_blank">Studio Ghibli</a> films.</p>

# Ghibli GraphQL API ✨

The [Ghibli GraphQL API](https://ghibli-graphql.herokuapp.com/) provides information about the world of Studio Ghibli via [GraphQL](https://graphql.org/). Information about the films, characters, lands, vehicles, and species from this beloved studio are now available via GraphQL. It was also created with a secondary purpose, to provide an example project of a public GraphQL API. There are lots of public REST APIs, but far fewer for GraphQL, so I figured there was some value in expanding the field!

This, of course, is heavily inspired by [janaipakos](https://jamesanaipakos.com/)'s [Ghibli API](https://github.com/janaipakos/ghibliapi), and uses the core JSON data from said API.

## GraphQL Types

- Films
- Locations
- People
- Species
- Vehicles

See [the GraphQL Playground](https://ghibli-graphql.herokuapp.com/) or [the schema](https://github.com/vivshaw/ghibli-graphql/blob/main/src/schema.gql) for documentation about the fields of each types.

## Getting Started

The simplest way to get started is via [the GraphQL Playground](https://ghibli-graphql.herokuapp.com/), in which you can create your queries with handy IntelliSense, typechecking, and prettifying; as well as viewing the schema and documentation in the sidebar.

If that's not your jam, any API tool like Postman or Insomnia will do the trick. If you prefer CLI tools, `curl` is fine too. For example:

```
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ vehicles { description id length name } }" }' \
https://ghibli-graphql.herokuapp.com/
```

When you run this request, the API will respond with the following JSON:

```json
{
  "data":{
    "vehicles":[
      {
        "description":"A military airship utilized by the government to access Laputa",
        "id":"4e09b023-f650-4747-9ab9-eacf14540cfb",
        "length":1000,
        "name":"Air Destroyer Goliath"
      },
      ...
    ]
  }
}
```

## API Limits

To mitigate server load, this API uses several forms of limit:

1. Query depth is limited at 7. Nested queries deeper than this will be rejected.
2. Query complexity is limited at 150, with a value of 1 complexity per field.
3. Throttling is set at a maximum of 3 requests per second for each client.
4. Finally, if you do something sneaky and manage to overload it anyway, there's the default Heroku timeout.

These are very rudimentary at the moment and will need further tuning.

## Running it locally

A simple `git clone` and `npm install` will get you started! Then you'll want to do two things:

1. Provide POSTGRES_HOST, POSTGRES_USERNAME, POSTGRES_PASSWORD, and POSTGRES_DATABASE as environment variables. I recommend [dotenv](https://www.npmjs.com/package/dotenv).
2. Set up the initial DB and seed it, with `npm run rb:reset`.
3. Hoist local dev instance with `npm run start:dev`.

You're now live on `localhost:3000` (or environment variable PORT if defined).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details!

## Next Steps

- [ ] CI/CD
- [ ] Filters
- [ ] Sorts
- [ ] Search, perhaps
- [ ] ...Dockerize or something?

## Examples

TypeScript client app coming Soon™ for glorious full-stack type safety.

## Resources

This GraphQL API was built in TypeScript using [NestJS](https://nestjs.com/) and [TypeORM](https://typeorm.io/) for maximum comfy. Under the hood, it's using [Express](https://expressjs.com/), [Apollo Server](https://github.com/apollographql/apollo-server), and [Postgres](https://www.postgresql.org/). Deployment is via [Heroku](https://heroku.com/).
