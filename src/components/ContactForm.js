import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const fieldMappings = {
    fullname: {
        label: "Full name",
        type: "text"
    },
    email: {
        label: "Email",
        type: "email",
    },
    phone: {
        label: "Phone",
        type: "number"
    },
    company: {
        label: "Company",
        type: "text"
    },
    address: {
        label: "Address",
        type: "text"
    }
}
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: this.getFormData(props.data || {})
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validator = this.validator.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    getFormData(data) {
        return {
            fullname: data.fullname || "",
            email: data.email || "",
            phone: data.phone || "",
            company: data.company || "",
            address: data.address || ""
        }
    }
    handleInputChange(event) {
        const target = event.target;
        this.setState({
            formData: {
                ...this.state.formData,
                [target.name]: target.value
            }
        });
    }
    onSubmit() {
        const { formData } = this.state;
        const { data } = this.props;
        if (data && data.id) {
            formData.id = data.id;
        } else {
            formData.id = (new Date().getTime()).toString(36);
        }
        this.props.onSubmit(formData)
    }
    validator() {
        const { formData: { fullname, email, phone } } = this.state;
        if (_.isEmpty(fullname.trim()) || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || _.isEmpty(phone.trim())) {
            return true;

        }
    }
    render() {
        return (<div>
            {
                _.map(fieldMappings, (data, key) => {
                    return (
                        <div className="row" key={key} style={{ minHeight: "50px" }}>
                            <div className='col-md-4 col-xs-5' style={{ color: "#928b8bfa", paddingLeft: "25px" }}>
                                {data.label}
                            </div>
                            <div className='col-md-7 col-xs-7'>
                                <input id={key} type={data.type} value={this.state.formData[key]} class="form-control" name={key} placeholder={data.label} onChange={this.handleInputChange} />
                            </div>
                        </div>
                    );
                })
            }
            <div className="row">
                <div className="col-md-offset-5 col-xs-offset-6">
                    <Button className="btn btn-primary" disabled={this.validator()} onClick={this.onSubmit}>Save</Button>
                </div>
            </div>
        </div>)


    }
}

export default ContactForm;
