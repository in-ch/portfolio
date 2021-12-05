import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import client from "./apollo/client";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
          <ApolloProvider client={client}>
              <Router>
                  <Layout>
                      <Switch>
                          <Route path="/" exact>
                              <Home />
                          </Route>
                      </Switch>
                  </Layout>        
              </Router>
          </ApolloProvider>
    </>
  );
}

export default App;
