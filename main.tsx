import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example from './App.cloudhub'
import KombaiWrapper from './KombaiWrapper'
import ErrorBoundary from '@kombai/react-error-boundary'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <KombaiWrapper>
        <Example />
      </KombaiWrapper>
    </ErrorBoundary>
  </StrictMode>,
)