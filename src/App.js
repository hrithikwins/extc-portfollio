import React from 'react';

import NavbarComponent from './components/NavbarComponent';
import Container from '@material-ui/core/Container';
import BlogContextProvider from './contexts/BlogContext';
// import TodoListComponent from './components/BlogListComponent';
import {Banner} from './components/Banner';

function App() {
  return (
    <Container>
      <BlogContextProvider>
        <NavbarComponent></NavbarComponent>
        <Banner></Banner>
      </BlogContextProvider>
    </Container>
  );
}

export default App;