import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Main } from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Login/SignIn';
import SignupCard from './pages/sign up/Signup';
import CreateProject from './pages/Project/ProjectForm';
import Simple from './pages/project';
import axios from 'axios';
import PageProjects from './pages/pageProjects';
//ScrollToTop Imports
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    return () => {
      axios.create({
        baseURL: 'http://localhost:5000',
      });
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/projects/:id" element={<PageProjects />} />
          <Route path="/project_details/:id" element={<Simple />} />
          <Route path="/create_project" element={<CreateProject />} />
        </Routes>
      </Router>
      <ScrollToTop />
    </ChakraProvider>
  );
}

export default App;
