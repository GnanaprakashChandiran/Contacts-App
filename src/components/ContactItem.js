import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getAvatarLetter, styles } from '../common/common';
class ContactItem extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this)
    }

    onEdit(contact, e) {
        this.props.onEdit(contact)
        e.stopPropagation();
    }

    render() {
        const { contact, onSelect } = this.props;
        return (<div className="row" style={{ margin: "10px" }} onClick={() => onSelect(contact)}>
            <div className="col-md-2 col-xs-1" style={styles.colCenter}><i class="glyphicon glyphicon-edit" onClick={(e) => this.onEdit(contact, e)}></i></div>
            <div className="col-md-6 col-xs-7">
                <div className="col-md-2 col-xs-2" style={styles.avatarDesign}><span style={styles.avatarInnerDesign}>{getAvatarLetter(contact.fullname)}</span></div>
                <div className="col-md-9 col-xs-7">
                    <h4 style={{ ...styles.headerContent, ...styles.elipsis }} title={contact.fullname}> {contact.fullname} </h4>
                    <div style={styles.elipsis} title={contact.email}>{contact.email}</div>
                </div>
            </div>
            <div className="col-md-4 col-xs-3" title={contact.company} style={{ ...styles.colCenter, ...styles.elipsis }} >{contact.company || '-'}</div>
        </div>)


    }
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    onSelect: PropTypes.func
}

export default ContactItem;
