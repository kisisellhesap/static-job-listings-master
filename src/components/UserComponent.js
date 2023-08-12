import React from 'react'

const UserComponent = ({ logo, company, neww, featured, position, postedAt, contract, location, role, level, tools, languages, onClick }) => {



    return (
        <div className='userComponent'>
            <div className='generalInfo'>
                <img src={logo} alt='' />
                <div className='info'>
                    <div className='topInfo'>
                        <span className='company'>{company}</span>
                        {neww && <span className='new'>NEW!</span>}
                        {featured && <span className='featured'>FEATURED</span>}

                    </div>
                    <p className='position'>{position}</p>
                    <div className='bottomInfo'>
                        <span className='postedAt'>{postedAt}</span>
                        •
                        <span className='contract'>{contract}</span>
                        •
                        <span className='location'>{location}</span>
                    </div>
                </div>
            </div>


            <div className='roleLevelLang'>
                <button className='role' onClick={onClick}>{role}</button>
                <button className='level' onClick={onClick}>{level}</button>

                {tools.length !== 0 && <div className='tools'>
                    {tools.map((item, index) => {
                        return <button className='tool' key={index} onClick={onClick}>{item}</button>
                    })}
                </div>}


                <div className='languages'>
                    {languages.map((item, index) => {
                        return <button className='lang' key={index} onClick={onClick}>{item}</button>
                    })}
                </div>

            </div>


        </div>
    )
}

export default UserComponent