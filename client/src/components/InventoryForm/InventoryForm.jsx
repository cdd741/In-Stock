import React from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg'

class InventoryForm extends React.Component{
    
    state = {
        formType: this.props.formType,
        id: this.props.id,
        itemName: null,
        itemDescription: null,
        itemCategory: null,
        itemStatus: null,
        itemWarehouse: null,
    }

    componentDidMount = () => {
        let inventoryItem = JSON.parse('../../data/invetories.json').find(item => item.id === this.state.id);
        this.setState({
            itemName: itemName.itemName,
            itemDescription
        })
    }

    render(){
        return(
            <>
                {
                    this.state.formType === newItem && 
                    <div className="inventory-form">
                        <div className="inventory-form__header">
                            <BackArrow className="inventory-form__back-arrow"/>
                            <h1 className="inventory-form__title">Edit Inventory Item</h1>
                        </div>
                    </div>
                }
                {
                    this.state.formType === addItem &&
                    <>

                    </>
                }
            </>
        )
    }
}