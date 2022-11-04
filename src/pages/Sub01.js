import React from 'react'
import Article01 from '../component/Article01';
import Aside from '../component/Aside';
import { NAVLINK } from '../component/Data';
import '../css/Subpage.scss'

const Sub01 = () => {
  const num = 0;
  return (
    <section className='Subpage sub01'>
      <div className="nav_bar">
        <div className="inner">{NAVLINK[num].content} / OCI </div>
      </div>
      <div className="inner sub">
        <Aside />
        <Article01 />
      </div>
    </section>
  )
}

export default Sub01