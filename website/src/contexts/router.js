import React from 'react';

const RouterContext = React.createContext();

export const useRouter = () => React.useContext(RouterContext);

export default RouterContext;
