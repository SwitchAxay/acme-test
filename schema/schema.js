const graphql = require("graphql");
const DB = require("../db.json");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList
} = graphql;

const countDB = DB.count;

const BookType = new GraphQLObjectType({
	name: "Book",
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		qty: { type: GraphQLInt },
		chapter: { type: GraphQLInt }
	}
});

const CountType = new GraphQLObjectType({
	name: "Count",
	fields: {
		count: { type: GraphQLInt }
	}
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		books: {
			type: new GraphQLList(BookType),
			// args: { id: {type: GraphQLString} },
			resolve(parentValue, args) {
				return DB.books;
			}
		},
		count: {
			type: CountType,
			resolve(parentValue, args) {
				return countDB;
			}
		}
	}
});

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		updateCount: {
			type: CountType,
			args: { count: { type: GraphQLInt } },
			resolve(parentValue, { count }) {
				countDB.count = count;
				return countDB;
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation
});
