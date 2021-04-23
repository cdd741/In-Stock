import React, { Component } from 'react';
import InventoryForm from '../components/InventoryForm/InventoryForm';

export default class EditInventory extends Component {
    render() {
        return (
            <div>
                <InventoryForm
                    formType="edit"
                    id={this.props.match.params.id}
                />
            </div>
        )
    }
}
