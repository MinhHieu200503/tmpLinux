const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const model = require('./model');
const { books, authors } = require('./data');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
} = require('graphql');
const { type } = require('os');
const { error } = require('console');
// <=== config npm ===>
//mongooose database
mongoose
    .connect('mongodb://127.0.0.1:27017/Graphql_Book')
    .then(() => {
        console.log('Connnect successfully');
    })
    .catch((error) => {
        console.log('Connect db fail');
    });
// .env
require('dotenv').config();
// <=== graphQL ===>
// Declare Type
const AuthorType = new GraphQLObjectType({
    name: 'author',
    description: 'this represent an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(BooksType),
            resolve: (author) => {
                return books.filter((book) => {
                    return book.authorId === author.id;
                });
            },
        },
    }),
});

const BooksType = new GraphQLObjectType({
    name: 'books',
    description: 'This repersent a book was written by an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find((author) => author.id === book.authorId);
            },
        },
    }),
});

// GraphObjectType
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Add data',
    fields: () => ({
        addbook: {
            type: BooksType,
            description: 'Add a book into database',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) },
            },
            resolve: async (src, args) => {
                const listBooks = await model.Book.find();
                const new_book = await model.Book.create({
                    id: listBooks.length + 1,
                    name: args.name,
                    authorId: args.authorId,
                });

                return new_book;
            },
        },
    }),
    addAuthor: {
        type: AuthorType,
        description: 'Add new author',
        args: {
            id: GraphQLNonNull(GraphQLInt),
            name: GraphQLNonNull(GraphQLString),
        },
        fields: (src, args) => {
            const newAuthor = { id: args.id, name: args.name };
            authors.push(newAuthor);
            return newAuthor;
        },
    },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Root query type',
    fields: () => ({
        book: {
            type: BooksType,
            description: 'Get A book with id in argument',
            args: { id: { type: GraphQLInt } },
            resolve: (src, args) => {
                return books.find((book) => {
                    return book.id === args.id;
                });
            },
        },
        books: {
            type: GraphQLList(BooksType),
            description: 'List all the books',
            resolve: async () => await model.Book.find(),
        },
        authors: {
            type: GraphQLList(AuthorType),
            description: 'List all the author',
            resolve: () => authors,
        },
        author: {
            type: AuthorType,
            description: 'Get An Author have id equal id in args',
            args: {
                id: { type: GraphQLInt },
            },
            resolve: (src, args) => {
                return authors.find((author) => author.id === args.id);
            },
        },
    }),
});
const schema = new GraphQLSchema({
    mutation: Mutation,
    query: RootQuery,
});

//router
app.use(
    '/grapql',
    graphqlHTTP({
        schema: schema,
        graphiql: false,
    }),
    (req, res) => {
        res.status(200).json('res return');
    }
);

// console.log(books.find((e) => (e.id = 2)));

app.listen(process.env.PORT, () => {
    console.log(`server is running in port ${process.env.PORT}`);
});
