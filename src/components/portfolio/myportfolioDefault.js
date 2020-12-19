import {React,Component} from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import './style.css'
import Card from '../shared/card'
import { motion } from 'framer-motion'
import Tree from '../tree'
import CubeRotate from '../shared/Cube-Rotation/rotating-cube'
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class myportfolioDefault extends Component {
    state = {
      toggle:true,
      count: 0
    }
    setToggle = () => {
      this.setState({
        toggle: !this.state.toggle,
      })
    }
    render() {
      return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
          <Parallax ref={ref => (this.parallax = ref)} pages={3}>
              {/* <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#101b2e' }} /> */}
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        
                <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        
                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                  <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                  <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt=""/>
                  <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                  <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt=""/>
                  <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                  <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt=""/>
                  <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                  <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt=""/>
                  <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt=""/>
                  <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                  <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt=""/>
                  <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                  <img src={url('earth')} style={{ width: '60%' }} alt=""/>
                </ParallaxLayer>
                
        
              <ParallaxLayer
                  offset={2}
                  speed={-0.3}
                  style={{
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true)
                  }}
                />
                
                <ParallaxLayer
                  offset={2}
                  speed={-0}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={() => this.parallax.scrollTo(0)}>
                  <img src={url('clients-main')} style={{ width: '40%' }}  alt=""/>
                </ParallaxLayer>
        
                <ParallaxLayer
                  offset={0}
                  speed={0.1}
                  className='column'
                  >
                  <div className='farhan-image-and-information'>
                    <Card/>
                    <div
                      className='farhan-information'
                    >
                      <div className='farhan-Name-block'>
                        <span className='farhan-Name' onClick={() => this.setToggle()}>Farhan Masud
                        {this.state.toggle ? <span > 😄</span>: <span > 🤪</span>}
                        </span>
                        <span style={{color:'#FFC83D', fontWeight:'700'}}>Software Engineer</span>
                      </div>
                      <p className='word-break'>Hi i am working as a Software Engineer with frontend and backend experience. Worked
                        in the most important software company in Bangladesh across different areas. Got
                        experience managing application servers and cloud tools (Sourcetree, GIT, AWS),
                        Handling client side design and architecture, data analysis, testing, debugging.
                      </p>
                    </div>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',marginTop:'160px',marginLeft:'670px'}}>
                    <CubeRotate/>
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  offset={1}
                  speed={0.1}
                  // onClick={() => this.parallax.scrollTo(2)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    
                  
                  {/* <img src={url('bash')} style={{ width: '40%' }} alt=""/> */}
                  <div style={{ width: '60%',height:'60%', backgroundColor:'',}}>
                  <Tree/>
                  </div>
                </ParallaxLayer>
        
            </Parallax>
        </motion.div>
      )
    }
  }


export default myportfolioDefault;