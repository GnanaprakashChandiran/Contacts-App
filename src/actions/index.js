import _ from 'lodash';
export const CONTACT_CREATED_FAILED = 'CONTACT_CREATED_FAILED'
export const CONTACT_CREATED_SUCCESS = 'CONTACT_CREATED_SUCCESS'


function requestPosts(data) {
  return {
    type: CONTACT_CREATED_FAILED,
    data
  }
}

function receivePosts(data) {
  return {
    type: CONTACT_CREATED_SUCCESS,
    data,
  }
}

export function fetchContacts() {
  return dispatch => {
    // let data = [
    //   {
    //     fullname: 'gp',
    //     lastname: 'test',
    //     company: '',
    //     phone: '9751035534',
    //     address: 'jkdkjf kjdshfkjsd djsfhkjdshfkj kjdsfhkj hkjfhs dkjhfkjdshfkjsdh jkfhjkds',
    //     email: 'gp@testtttttttttttttttttttttttttt.com'
    //   },
    //   {
    //     fullname: 'gpwqw',
    //     lastname: 'tesqwqwt',
    //     company: 'aszcsnbf sdjhfbsdjbfjkdsbkjfkjsdnfjksdjkfkjsdnjkfnkjsdfas',
    //     phone: '97510353534',
    //     address: 'jkdkjf kjdshfkjsd djsfhkjdshfkj kjdsfhkj hkjfhs dkjhfkjdshfkjsdh jkfhjkds',
    //     email: 'gp@ttttttttttttttttttttttttt.com'
    //   }
    // ]
    return dispatch(requestPosts([]))
    //   return new Promise((resolve, reject) => {
    //     dispatch(requestPosts(data))
    //   })
    // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

export function addContact(contact) {
  return (dispatch, getState) => {
    let contacts = _.cloneDeep(getState().contactsManage.contacts || []);
    contacts.push(contact);
    return dispatch(receivePosts(contacts))
  }
}

export function updateContact(contact) {
  return (dispatch, getState) => {
    let contacts = _.cloneDeep(getState().contactsManage.contacts || []);
    let val = _.findIndex(contacts, (data) => data.id == contact.id);
    contacts.splice(val,1,contact);
    return dispatch(receivePosts(contacts))
  }
}
