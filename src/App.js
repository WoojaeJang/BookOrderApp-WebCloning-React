import React from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Books from './components/Books/Books'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Books />
      </Main>
    </>
  )
}

export default App