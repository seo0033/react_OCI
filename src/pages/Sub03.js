import React from 'react'
import Article03 from '../component/Article03';
import Aside from '../component/Aside';
import { NAVLINK } from '../component/Data';
import '../css/Subpage.scss'

const Sub03 = () => {
  const num = 2;
  return (
    <section className='Subpage sub03'>
      <div className="nav_bar">
        <div className="inner">{NAVLINK[num].content} / OCI </div>
      </div>
      <div className="inner sub">
        <Aside />
        <Article03 />
      </div>
    </section>
  )
}

export default Sub03