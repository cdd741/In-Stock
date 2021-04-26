import React, { Component } from 'react';
import InventoryForm from '../components/InventoryForm/InventoryForm';

export default class EditInventory extends Component {

    handleOnCancel = (e) => {
        e.preventDefault();
        alert("Adding warehouse cancelled, going back to previous page.😊");
        // setting url to the previous page
        this.props.history.goBack();
      };

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
