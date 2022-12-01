import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Product {
        _id: ID
        title: String
        originalTitle: String
        originalTitleRomanised: String
        image: String
        description: String
        director: String
        producer: String
        releaseYear: Int
        minDuration: Int
        info: String
        price: Int
    }

    type Query {
        getAllProducts: [Product]
        getProductById(id: ID!): Product
    }

    input NewProduct {
        title: String!
        originalTitle: String!
        originalTitleRomanised: String!
        image: String!
        description: String!
        director: String!
        producer: String!
        releaseYear: Int!
        minDuration: Int!
        info: String!
        price: Int!
    }

    type Mutation {
        createProduct(product: NewProduct!): String
        updateProductById(id: ID!, product: NewProduct!): String
        deleteProductById(id: ID!): String
    }
`;

export default typeDefs;
