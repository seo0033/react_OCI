import React from 'react'
import Article02 from '../component/Article02';
import Aside from '../component/Aside';
import { NAVLINK } from '../component/Data';
import '../css/Subpage.scss'

const Sub02 = () => {
  const num = 1;
  return (
    <section className='Subpage sub02'>
      <div className="nav_bar">
        <div className="inner">{NAVLINK[num].content} / OCI </div>
      </div>
      <div className="inner sub">
        <Aside />
        <Article02 />
      </div>
    </section>
  )
}

export default Sub02