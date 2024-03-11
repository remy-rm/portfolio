import React from 'react'
import './style.scss'
import portrait from '../../assets/img/PORTRAIT.jpg'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className="container">
      <div className={'me'}>
        <header className="header">
          <h1 className={'title'}>Developer Web</h1>
        </header>
        <div className={'me__img'}>
          <img src={portrait} alt={'portrait'} />{' '}
          <div className={'me__name'}>
            <h2 className={'me__name--name'}>Marquis</h2>
            <h2 className={'me__name--first'}>Rémy</h2>
          </div>
        </div>
      </div>

      <div className={'desc'}>
        <h3>À propos de moi</h3>
        <p>
          Passionné par le développement web, je suis actuellement en formation
          chez OpenClassrooms pour devenir développeur web. Je suis à la
          recherche d'une alternance pour la rentrée 2021.
        </p>
        <Link to={'/Apropos/'}>Plus d'information </Link>
      </div>
    </div>
  )
}

export default Index
