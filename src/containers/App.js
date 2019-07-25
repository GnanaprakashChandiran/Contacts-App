import { connect } from 'react-redux'
import {fetchContacts, addContact, updateContact} from '../actions'
import App from '../components/App'

function mapStateToProps(state) {
  const { contactsManage } = state
  return {
    contacts: contactsManage.contacts || []
  }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchContacts: () => dispatch(fetchContacts()),
      addContact: (contact) => dispatch(addContact(contact)),
      updateContact: (contact) => dispatch(updateContact(contact))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(App)