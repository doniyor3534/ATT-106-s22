import React, { useEffect, useState } from 'react'
import { ForwardOutlined, UndoOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { secuntfun, uyinchiselect } from '../Redux/HomeRecuser';

export const Home = () => {
  const { uyinchilar, uyinchi,secunt } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const selectFun = async (e) => {
    let uyinch = await e.target.value
    dispatch(uyinchiselect(uyinch))
  }
  // secund
  // setInterval(() => {
  //   dispatch(secuntfun())
  // }, 2000)

  return (
    <div className='home'>
      <section data-aos="fade-up " data-aos-delay="100" data-aos-easing="linear" className="sec1 "
        data-aos-anchor-placement="flip-left">
        <h1 className="title">Biz Namanagan Muhandislik-qurilish instituti talabalarimiz !</h1>
        <p className="titleparagrf">
          ATT-106-s22 guruh - Eng activ guruh
        </p>
      </section>
      <section data-aos="fade-up " data-aos-delay="100" data-aos-easing="linear" className="sec2"
        data-aos-anchor-placement="flip-left">
        <h1 className="titleparagrf">Bilimingizni sinab ko'ring </h1>
        <div className="uyincards">
          <div className="uyinheader">
            <h1>Uyinchi tanlang</h1>
            <select id="uyinchi" onChange={selectFun} >
              {
                uyinchilar.map((val, i) => (
                  <option value={val.name} key={i}>{val.name}</option>
                ))
              }
            </select>
            <div className="card">
              <div className="vaqtpos">
                <img src="./img/soat.gif" alt="" className='soat' />
                <h2 className="secund">{secunt}</h2>
              </div>
            </div>
          </div>
          <div className="uyinbody">
            {uyinchi !== '' ?
              <>
                <p className="savol">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, unde??</p>
                <div className="variant">
                  <button className="a ok">A) : <span>aaaaaaaaaaa</span></button>
                  <button className="b">B) : <span>aaaaaaaaaaa</span></button>
                  <button className="c">C) : <span>aaaaaaaaaaa</span></button>
                  <button className="d err">D) :  <span>aaaaaaaaaaa</span></button>
                </div>
                <div className="uyinbodyfooter">
                  <button className="next">Next <ForwardOutlined /></button>
                  <button className="clear">Clear <UndoOutlined /></button>
                </div>
              </>
              : <div className='startcard'><button className='start'>Boshlash</button></div>
            }
          </div>
        </div>
      </section>
      <section data-aos="fade-up " data-aos-delay="100" data-aos-easing="linear" className="sec3"
        data-aos-anchor-placement="flip-left">
        <h1 > влллплклпк</h1>
      </section>
      <section data-aos="fade-up " data-aos-delay="100" data-aos-easing="linear" className="sec4"
        data-aos-anchor-placement="flip-left">
        <h1 > влллплклпк</h1>
      </section>
      <section data-aos="fade-up " data-aos-delay="100" data-aos-easing="linear" className="sec5"
        data-aos-anchor-placement="flip-left">
        <h1 > влллплклпк</h1>
      </section>
    </div>
  )
}
