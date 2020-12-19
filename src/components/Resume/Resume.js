import React from 'react'
import {motion} from 'framer-motion'
import pageTransation from '../shared/pageTransation'
export default function Resume() {
    return (
        <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageTransation}>
            <div style={{color:'white'}}>
                sumeResumeResumeResumeResumeResumeResumeResume
            </div>
        </motion.div>
    )
}
