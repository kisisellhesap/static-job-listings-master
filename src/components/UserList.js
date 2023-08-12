import React, { useContext } from 'react'
import UserComponent from "./UserComponent";
import UserContext from '../context/UserContext';
const UserList = () => {

    const { data, onClick, filterData } = useContext(UserContext);

    const filteredData = data.filter((item) => {
        if (filterData.length === 0) {
            return true;
        }
        const itemFilters = [item.role, item.level, ...item.languages];
        return filterData.every(filter => itemFilters.includes(filter));
    });

    return (
        <div className='userList'>
            {filteredData.map(item => {
                return <UserComponent key={item.id} logo={item.logo} company={item.company} neww={item.new} featured={item.featured} position={item.position} postedAt={item.postedAt} contract={item.contract} location={item.location} role={item.role} level={item.level} tools={item.tools} languages={item.languages} onClick={onClick} />
            })}
        </div>
    )
}

export default UserList