import React, { Component } from 'react';
import {
    phone as Phone,
    company as Company,
    address as Address,
    mail as Email,
} from "../../shared/svgComponents/index";

class UserInformation extends Component<any> {
    render() {
        const {user} = this.props;
        return (
            <div className="user-head">
                <h2 className="user-name">
                    {user.name}
                </h2>
                <ul className="user-info">
                    <li>
                        <Address />
                        <span>{user.address.street}, {user.address.city}</span>
                    </li>
                    <li>
                        <Company />
                        <span>{user.company.name}</span>
                    </li>
                    <li>
                        <Email />
                        <span>{user.email}</span>
                    </li>
                    <li>
                        <Phone />
                        <span>{user.phone}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserInformation;