import React from 'react';
import './directory.styles.scss';
import Menuitem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';


const Directory = ({sections}) => (
      <div className='directory-menu'>
        {
          sections.map(({ id, ...otherStateProps }) => (
            <Menuitem key={id} {...otherStateProps} />
          ))
        }

      </div>
    )

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
