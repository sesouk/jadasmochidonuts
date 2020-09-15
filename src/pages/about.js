import React from "react"
import donutsFancy from '../images/donutsFancy.png'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <div className='about' >
    <img className='about__img' src={donutsFancy} alt='Nicely Plated Donuts'/>
    <p className='about__text'>Jada’s passion for baking started when she was just 6 years old. She used to ask for baking supplies when asked what she wanted for birthdays and holidays. While most other kids were playing with toys, Jada was baking a variety of goodies to share with family and friends. Jada just started her junior year of high school, and we started this business as a way to help her raise money for her upcoming cheer season. We never anticipated all of the love and support, but we are very grateful! We can’t wait to continue sharing the love through our mochi donuts 💜</p>
    </div>
  </Layout>
)

export default About
