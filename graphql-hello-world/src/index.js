const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// 1
let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },

]

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
    link: (parent, args) => {
      let id_link = null;
      links.forEach((link) => {
        if (link.id == args.id) {
          id_link =  link;
        }
      });
      return id_link;
    },
  },
  
  Mutation: {
    post: (parent, args) => {
      let idCount = links.length

      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },

    updateLink: (parent, args) => {
      let idx = null;
      links.forEach((link, i) => {
        if (link.id == args.id) {
          idx = i;
        }
      });
      
      if (idx !== null) {
        if (args.description) {
          links[idx].description = args.description;
        } 
        if (args.url) {
          links[idx].url = args.url;
        }
      }
    },

    deleteLink: (parent, args) => {
      let idx = null;
      links.forEach((link, i) => {
        if (link.id == args.id) {
          idx = i;
        }
      });

      if (idx !== null) {
        links.splice(idx, 1);
      }
    },
  },
}


// 3
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
