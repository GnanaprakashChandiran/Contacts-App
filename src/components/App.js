import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UIModal from '../common/Modal';
import Header from '../common/header';
import ContactList from './ContactList';
import ContactView from './ContactView';
import ContactForm from './ContactForm';
import './main.css'
const styles = {
  headerContent: {
    fontWeight: 'bold',
    marginBottom: '0'
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: null,
      mode: 'list',
      modalOpen: false,
      contacts: props.contacts || []
    }
    this.addContact = this.addContact.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchContacts();
  }
  componentWillReceiveProps(nextPropos) {
    if (this.state.selectedData) {
      let selectedVal = _.find(nextPropos.contacts, (contact) => contact.id === this.state.selectedData.id);
      this.setState({
        selectedData: selectedVal,
        contacts: nextPropos.contacts
      })
    } else {
      this.setState({
        contacts: nextPropos.contacts
      })
    }
  }
  addContact(modeVal, data) {
    this.setState({
      mode: modeVal,
      modalOpen: !this.state.modalOpen,
      selectedData: data ? data : this.state.selectedData
    })
  }
  onSubmitForm(data) {
    if (this.state.mode === 'edit') {
      this.props.updateContact(data)
    } else {
      this.props.addContact(data);
    }
    this.setState({
      mode: 'list',
      modalOpen: !this.state.modalOpen
    })
  }
  onSelect(data) {
    this.setState({
      selectedData: data
    })
  }
  onClose(val) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      mode: 'list'
    })
  }
  onChange(e) {
    let val = e.target.value;
    let filterData = _.filter(this.props.contacts, (contact) => {
      if (contact.fullname.toLowerCase().indexOf(val) > -1 || contact.phone.toLowerCase().indexOf(val) > -1 ||
        contact.email.toLowerCase().indexOf(val) > -1) {
        return true;
      }
    });
    this.setState({
      contacts: filterData
    })
  }
  modelBody() {
    const { mode, selectedData } = this.state;
    return <ContactForm data={mode === "edit" && selectedData} mode={mode} onSubmit={this.onSubmitForm} />
  }
  render() {
    const { selectedData, modalOpen, mode, contacts } = this.state;
    return (
      <div className="container">
        <Header selectedData={selectedData} onChange={this.onChange} addContact={this.addContact} />
        <div className="row">
          <div className={selectedData ? "col-md-7 col-xs-12 viewmode" : "col-md-7 col-xs-12"}>
            <ContactList contactData={contacts} onSelect={this.onSelect} onEdit={(data) => this.addContact('edit', data)} />
          </div>
          <div className="col-md-5 col-xs-12">
            {selectedData && <ContactView contact={selectedData} backToList={() => this.setState({ selectedData: null })} />}
          </div>
        </div>
        <UIModal show={modalOpen} title={`${mode === 'create' ? "Create" : "Edit"}  Contact`} onClose={() => this.onClose(false)} body={this.modelBody()} ></UIModal>
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.string.isRequired
}

export default App;
