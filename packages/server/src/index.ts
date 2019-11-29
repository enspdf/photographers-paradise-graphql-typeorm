import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";

(async () => {
    const app = express();
    useContainer(Container);

    await createConnection();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [`${__dirname}/./modules/**/*.resolver.ts`],
            emitSchemaFile: true,
            container: Container,
        }),
    });

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
})();