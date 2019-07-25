import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getAvatarLetter, styles } from '../common/common';
let fieldMappings = {
    fullname: "Full name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    address: "Address"
}
class ContactView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { contact, backToList } = this.props;
        return (
            <div style={{ margin: "10px", backgroundColor: "#d3d3d36b", padding: "15px" }} >
                <div className="back-button" onClick={backToList}>
                    Back
                </div>
                <div style={styles.avatarDesign}><span style={styles.avatarInnerDesign}>{getAvatarLetter(contact.fullname)}</span></div>
                <div style={styles.alignCenter}>
                    <h4 style={{ ...styles.headerContent, ...styles.elipsis }} title={contact.fullname}> {contact.fullname} </h4>
                    <div style={styles.elipsis}> description</div>

                </div>
                <div style={{ ...styles.alignCenterEighty, ...styles.contentAlign }}>
                    {
                        _.map(fieldMappings, (data, key) => {
                            return (
                                <div className="row" style={{ minHeight: "40px" }}>
                                    <div className='col-md-5 col-xs-5' style={{ color: "#928b8bfa" }}>
                                        {data}
                                    </div>
                                    <div className='col-md-7 col-xs-7' style={styles.contentValAlign}>
                                        {contact[key] || 'No Information Provided'}
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </div>)


    }
}

ContactView.propTypes = {
    contact: PropTypes.object.isRequired,
    backToList: PropTypes.func
}

export default ContactView;
