import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import createCache from '@emotion/cache';
import theme from './src/theme';
import apolloClient from './src/lib/apollo';
import CloudhubLandingPage from './src/components/CloudhubLandingPage';
import PricingPage from './src/components/PricingPage';
import LoginPage from './src/components/LoginPage';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CloudhubLandingPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<CloudhubLandingPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default App;