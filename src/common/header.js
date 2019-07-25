import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './common';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange, selectedData, addContact } = this.props;
        return (<div>
            <div className="row">
                <div className="col-md-1 col-xs-3">
                    <img src="src/assets/contact-icon.jpg" width="50" height="50" />
                </div>
                <div>
                    <h4 style={styles.headerContent} >Contacts</h4>
                    <span className="header-content">Welcome to contacts page</span>
                </div>
            </div>
            <hr></hr>
            <div className={selectedData ? "row viewmode" : "row"}>
                <div className="col-md-3 col-xs-7">
                    <div class="input-group ">
                        <input id="search" type="text" class="form-control" name="search" placeholder="Search Contacts" onChange={onChange} />
                        <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={() => addContact('create')}>
                        <i class="glyphicon glyphicon-plus"></i>
                        Add Contact
            </button>
                </div>
            </div>
        </div>)


    }
}

Header.propTypes = {
    selectedData: PropTypes.object,
    onChange: PropTypes.func,
    addContact: PropTypes.func
}

export default Header;
