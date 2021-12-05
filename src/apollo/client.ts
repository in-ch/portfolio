import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const API_URL = 'http://localhost:4000'; // 백엔드 링크 
export const FRONT_URL = 'http://localhost:3000'; // 프론트엔드 링크
 
const httpLink = createHttpLink({
    uri:`${API_URL}/graphql`
});

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem("incheolisbest")));
export const cart = makeVar<any>([]);

export const logUserIn = (token:string) => {
    localStorage.setItem("incheolisbest",token);
    isLoggedInVar(true);
};
export const logUserOut = (history:any) => {
    localStorage.removeItem("incheolisbest");
    try{
        history.replace();   
    } catch(e){
    }
    window.location.reload();
};





const authLink = setContext((_,{headers}) => {
    return {
      headers: {
        ...headers,
      }
    }
});

export const cache = new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //     },
    //   }
    // },
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

export default client;
  