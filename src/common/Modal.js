import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class UIModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose, show, title, body, footer } = this.props;
        return (
            <div >
                <Modal
                    show={show}
                    onHide={onClose}
                    bsSize="medium">
                    {
                        title && <Modal.Header>
                            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
                        </Modal.Header>
                    }
                    <Modal.Body>{body}</Modal.Body>
                    {/* <Modal.Footer>
                        {
                            footer ? footer : <Button className="btn btn-primary" onClick={onClose}>Cancel</Button>
                        }
                    </Modal.Footer> */}
                </Modal>
            </div>)
    }
}

UIModal.propTypes = {
    body: PropTypes.object.isRequired,
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    footer: PropTypes.object
}

export default UIModal;
