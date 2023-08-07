import React from 'react'

const UserComponent = ({ logo, company, neww, featured, position, postedAt, contract, location, role, level, tools }) => {
    return (
        <div className='userComponent'>
            <div className='generalInfo'>
                <img src={logo} alt='' />
                <div className='info'>
                    <div className='topInfo'>
                        <span className='company'>{company}</span>
                        <span className='new'>{neww}</span>
                        <span className='featured'>{featured}</span>
                    </div>
                    <p className='position'>{position}</p>
                    <div className='bottomInfo'>
                        <span className='postedAt'>{postedAt}</span>
                        <span className='contract'>{contract}</span>
                        <span className='location'>{location}</span>
                    </div>
                </div>
            </div>

            <div className='roleLevelLang'>
                <button className='role'>{role}</button>
                <button className='level'>{level}</button>

                <div className='languages'>
                    {tools.map((item, index) => {
                        return <button className='lang' key={index}>{item}</button>
                    })}
                </div>

            </div>


        </div>
    )
}

export default UserComponent