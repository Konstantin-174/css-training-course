import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Blog.module.scss'
import loupe from './logo/loupe.svg'
import vector from './logo/Vector.svg'

const Blog = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                <h5 className={classes.taC}>OUR RESOURCES</h5>
                <h4 className={classes.taC}>
                    Start reading our blog
                </h4>
                <ul className={s.sliderWrap}>
                    <li className={s.sliderItem}>
                        <div className={s.sliderGallery}>
                            <a href="#" className={s.big}>
                                <span className={s.loupe}>
                                    <img src={loupe} alt="Loupe"/>
                                </span>
                            </a>
                            <a href="#" className={s.small1}> </a>
                            <a href="#" className={s.small2}> </a>
                        </div>
                        <div className={s.sliderContent}>
                            <h3>
                                How to start planning
                            </h3>
                            <div className={s.text}>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit
                                tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes
                                mei ea.
                                Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                            </div>
                            <div className={classes.btnGroup}>
                                <a href="#" className={`${classes.btn} + ${classes.primaryBtn}`}>
                                    Read now
                                </a>
                                <a href="#" className={`${classes.btn} + ${classes.noBgBtn}`}>
                                    Add to your bookmarks
                                </a>
                            </div>
                        </div>
                    </li>
                    <a href="#" className={`${s.btn} + ${s.btnPref}`}>
                        <img src={vector} alt="Vector"/>
                    </a>
                    <a href="#" className={`${s.btn} + ${s.btnNext}`}>
                        <img src={vector} alt="Vector"/>
                    </a>
                </ul>
                <ul className={`${classes.dots} + ${s.dots}`}>
                    <li className={`${classes.dotsItem} + ${classes.dotsItemActive}`}> </li>
                    <li className={classes.dotsItem}> </li>
                    <li className={classes.dotsItem}> </li>
                </ul>
            </div>
        </section>
    )
}

export default Blog;