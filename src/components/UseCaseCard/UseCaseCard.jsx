import React from 'react'
import IconShape from '../iconShape/IconShape'
import '../UseCaseCard/UseCaseCard.css'

function UseCaseCard({ CardIcon, CardDescription }) {
  return (
    <div className='useCaseCard'>
      <IconShape
        icon={CardIcon}
        size={78}
        className='useCaseIcon'
      />
      <p className='useCaseDescription LexendRegular'>{CardDescription}</p>
    </div>
  )
}

export default UseCaseCard
