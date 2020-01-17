import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Header from "./Components/Header";
import Books from "./Components/Books";

const client = new ApolloClient({});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Header />
				<Books />
			</div>
		</ApolloProvider>
	);
};

export default App;
