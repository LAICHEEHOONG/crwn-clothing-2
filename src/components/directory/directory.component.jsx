import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import data from './directory.data';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: data
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...other}) => (
                        <MenuItem
                            key={id}
                            {...other}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;