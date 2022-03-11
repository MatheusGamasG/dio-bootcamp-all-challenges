import React from 'react';
import Button from './Button'

function Table(props) {
    const { user1, user2, deleteRow } = props
    
    return (
        <table>
            <th>
                <td>Nome</td>
                <td>Idade</td>
            </th>
            <tr>
                <td>{user1.name}</td>
                <td>{user1.age}</td>
                <Button onClick={deleteRow}/>
            </tr>
            <tr>
                <td>{user2.name}</td>
                <td>{user2.age}</td>
                <Button onClick={deleteRow}/>
            </tr>
        </table>
    )

}

export default Table