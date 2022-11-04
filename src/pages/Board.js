import React from 'react'
import Article04 from '../component/Article04';
import Aside from '../component/Aside';
import { NAVLINK } from '../component/Data';
import '../css/Subpage.scss'

const Board = () => {
  const num = 3;
  return (
    <section className='Subpage board'>
      <div className="nav_bar">
        <div className="inner">{NAVLINK[num].content} / OCI </div>
      </div>
      <div className="inner sub">
        <Aside />
        <Article04 />
      </div>
    </section>
  )
}

export default Board