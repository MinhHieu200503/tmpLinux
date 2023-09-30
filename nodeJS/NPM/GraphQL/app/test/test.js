const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const jwt = require('jsonwebtoken');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello, World!',
    },
};

const app = express();

// Một ví dụ đơn giản về tạo JWT và trả về trong tiêu đề
app.post('/login', (req, res) => {
    // Xác thực người dùng ở đây và tạo JWT
    const user = { id: 1, username: 'example_user' };
    const token = jwt.sign(user, 'your_secret_key_here');

    // Trả về JWT trong tiêu đề "Authorization"
    res.setHeader('Authorization', `Bearer ${token}`);
    res.send('Login successful');
});

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(
        `Server is running at http://localhost:4000${server.graphqlPath}`
    )
);
