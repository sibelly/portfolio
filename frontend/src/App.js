import React, { useState, useEffect } from 'react'
import api from './services/api';

import './App.css'
// import backgroundImage from './assets/background.jpeg'

import Header from './components/Header'

function App() {
  const [repositories, setRepositories] = useState([])

  async function handleAddRepository() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`])
    const response = await api.post('repositories', {
      title: `Novo repo ${Date.now()}`,
      url: 'teste.com',
      techs: 'react',
      likes: 0
    })

    const repo = response.data
    console.log('%%%%%%% response.data => ', response.data)
    setRepositories([...repositories, repo])
  }


  useEffect(() => {
		api.get('repositories').then(response => {
      console.log('&&&&&&&& useEffect => ', response)
      setRepositories(response.data)
    });
	}, []);

  return (
    <>
      <Header title="Repositories"/>

      {/* <img width={300} src={backgroundImage} alt="Background"/> */}

      <ul>
        { repositories.map(repo => <li key={repo.id}> { repo.title } </li>)}
      </ul>

      <button type="button" onClick={handleAddRepository}>Adicionar repositório</button>
    </>
  )
}

export default App