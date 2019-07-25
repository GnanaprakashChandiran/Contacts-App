import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const styles = {
    colCenter: {
        textAlign: "center"
    },
    headerDesign: {
        margin: "10px",
        backgroundColor: "#d3d3d36b",
        paddingTop: "10px",
        paddingBottom: "10px"
    }
}

class ContactList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { contactData, onSelect, onEdit } = this.props;
        return (
            <div>
                <div className="row" style={styles.headerDesign}>
                    <div className="col-md-2 col-xs-1" style={styles.colCenter}><i class="glyphicon glyphicon-plus"></i></div>
                    <div className="col-md-6 col-xs-7"> Basic Info
            </div>
                    <div className="col-md-4 col-xs-3" style={styles.colCenter}> Company</div>
                </div>
                <div className="contactlist-scroll">
                {
                    contactData && contactData.length && contactData.map((data, index) => {
                        return <ContactItem contact={data} key={index} onEdit={onEdit} onSelect={onSelect} />
                    }) || 'No Contacts Found'
                }
                </div>
            </div>
        )
    }
}

ContactList.propTypes = {
    contactData: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
    onEdit: PropTypes.func
}

export default ContactList;
