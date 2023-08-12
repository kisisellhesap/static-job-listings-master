import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const UserFilter = () => {

    const { filterData, filterSetData } = useContext(UserContext);
    const [drag, setDrag] = useState(false);



    document.addEventListener("mouseup", function () { setDrag(false); })




    return (

        <div className={filterData.length !== 0 ? "userFilter" : "userFilter d-none"}>
            <div className='filterList' onMouseMove={(e) => {
                if (!drag) return;
                document.querySelector(".filterList").scrollLeft -= e.movementX;

            }} onMouseDown={() => {
                setDrag(true);
            }}>

                {filterData.map((item, indexs) => {
                    return <div className='filterBtn' key={indexs}>
                        <span className='filterName'>{item}</span>
                        <FontAwesomeIcon icon={faXmark} className='removeIcon' onClick={() => {
                            const a = filterData.filter((item, index) => {
                                return index !== indexs
                            })

                            filterSetData(a);
                        }} />
                    </div>
                })}
            </div>
            <button className='clearFilter' onClick={() => {
                filterSetData([]);
            }}>Clear</button>
        </div>
    )
}

export default UserFilter