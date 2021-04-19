module.exports = `
type Post {
    id: String!
    title: String!
    body: String!
}

type User {
    id: String!
    name: String!
    email: String!
    posts: [Post!]!
}

type RootQuery {
    users: [User!]!,
}

schema {
    query: RootQuery
}
`