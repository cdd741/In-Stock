import React from 'react';
import { ReactComponent as BackArrow } from '../../assets/icons/arrow_back-24px.svg';
import inventories from '../../data/inventories.json';
import Button from '../Button/Button';
import Input from '../Input/Input';
import SecondLevelWrap from '../SecondLevelWrap/SecondLevelWrap';
import { Link } from 'react-router-dom';

import './InventoryForm.scss';

class InventoryForm extends React.Component{
    
    state = {
        formType: this.props.formType,
        id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',//this.props.match.params.id
        itemName: null,
        itemDescription: null,
        itemCategory: null,
        itemStatus: null,
        itemWarehouse: null,
    }

    componentDidMount = () => {
        let inventoryItem = inventories.find(item => item.id === this.state.id);
        this.setState({
            itemName: inventoryItem.itemName,
            itemDescription: inventoryItem.description,
            itemCategory: inventoryItem.category,
            itemStatus: inventoryItem.status,
            itemWarehouse: inventoryItem.warehouse
        })
        if(this.state.formType === 'editItem'){
            let itemName = document.querySelector('#item-name');
            let itemDescription = document.getElementById('description');
            let category = document.getElementById('category');
            let status = document.getElementById('status');
            let warehouse = document.getElementById('warehouse')

            console.log(itemName);
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    render(){
        return(
            <>
                <div className="inventory-form-container">
                    {
                    this.state.formType === 'addItem' && 
                    <div className="inventory-form">
                        <div className="inventory-form__header">
                            <Link to="/inventories"><BackArrow className="inventory-form__back-arrow"/></Link>
                            <h1 className="inventory-form__title">Add New Inventory Item</h1>
                        </div>
                        <form className="inventory-form__form">
                            <div className="inventory-form__item-details">
                                <h3 className="inventory-form__subtitle">Item Details</h3>
                                <label htmlFor="item-name" className="inventory-form__label">Item Name</label>
                                <input type="text" name="item-name" placeholder="Item Name" id="item-name" className="inventory-form__input"/>
                                <label htmlFor="item-description" className="inventory-form__label">Description</label>
                                <textarea type="text" name="item-description" placeholder="Please enter a brief item description..." className="inventory-form__text-area" id="item-description"/>
                                <label htmlFor="categories" className="inventory-form__label">Category</label>
                                <select name="categories" id="categories" className="inventory-form__select" id="categories">
                                    <option value="Electronics" className="inventory-form__option">Electronics</option>
                                    <option value="Gear" className="inventory-form__option">Gear</option>
                                    <option value="Apparel" className="inventory-form__option">Apparel</option>
                                    <option value="Accessories" className="inventory-form__option">Accessories</option>
                                </select>
                            </div>
                            <div className="inventory-form__item-availability">
                                <h3 className="inventory-form__subtitle">Item Availability</h3>
                                <label htmlFor="status" className="inventory-form__label">Status</label>
                                <div className="inventory-form__radios">
                                    <input type="radio" value="In Stock" name="status" id="in-stock" className="inventory-form__radio"/>
                                    <label htmlFor="in-stock" className="inventory-form__label">In Stock</label>
                                    <input type="radio" value="Out Of Stock" name="status" id="out-of-stock" className="inventory-form__radio"/>
                                    <label htmlFor="out-of-stock" className="inventory-form__label">In Stock</label>
                                </div>
                                <label htmlFor="quantity" className="inventory-form__label">Quantity</label>
                                <input type="text" name="quantity" placeholder="0" className="inventory-form__input"/>
                                <label htmlFor="warehouses" className="inventory-form__label">Warehouse</label>
                                <select name="warehouses" id="warehouses" className="inventory-form__select">
                                    <option value="Manhattan">Manhattan</option>
                                    <option value="King West">King West</option>
                                    <option value="Granville">Granville</option>
                                    <option value="San Fran">San Fran</option>
                                    <option value="Santa Monica">Santa Monica</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Montreal">Montreal</option>
                                </select>
                            </div>
                            <div className="inventory-form__buttons">
                                <Button type="cancel" className="inventory-form__button" children="Cancel" onClick={() => {
                                    this.props.history.push('/inventories')
                                }}/>
                                <Button type="add item" className="inventory-form__button" children="+ Add Item"/>
                            </div>
                        </form>
                    </div>
                    }
                    {
                    this.state.formType === 'editItem' && 
                    <div className="inventory-form">
                        <div className="inventory-form__header">
                            <Link to="/inventories"><BackArrow className="inventory-form__back-arrow"/></Link>
                            <h1 className="inventory-form__title">Add New Inventory Item</h1>
                        </div>
                        <form className="inventory-form__form">
                            <div className="inventory-form__item-details">
                                <h3 className="inventory-form__subtitle">Item Details</h3>
                                <label htmlFor="item-name" className="inventory-form__label">Item Name</label>
                                <input type="text" name="item-name" placeholder="Item Name" className="inventory-form__input"/>
                                <label htmlFor="item-description" className="inventory-form__label">Description</label>
                                <textarea type="text" name="item-description" placeholder="Please enter a brief item description..." className="inventory-form__text-area"/>
                                <label htmlFor="categories" className="inventory-form__label">Category</label>
                                <select name="categories" id="categories" className="inventory-form__select">
                                    <option value="Electronics" className="inventory-form__option">Electronics</option>
                                    <option value="Gear" className="inventory-form__option">Gear</option>
                                    <option value="Apparel" className="inventory-form__option">Apparel</option>
                                    <option value="Accessories" className="inventory-form__option">Accessories</option>
                                </select>
                            </div>
                            <div className="inventory-form__item-availability">
                                <h3 className="inventory-form__subtitle">Item Availability</h3>
                                <label htmlFor="status" className="inventory-form__label">Status</label>
                                <div className="inventory-form__radios">
                                    <input type="radio" value="In Stock" name="status" id="in-stock" className="inventory-form__radio"/>
                                    <label htmlFor="in-stock" className="inventory-form__label">In Stock</label>
                                    <input type="radio" value="Out Of Stock" name="status" id="out-of-stock" className="inventory-form__radio"/>
                                    <label htmlFor="out-of-stock" className="inventory-form__label">In Stock</label>
                                </div>
                                <label htmlFor="warehouses" className="inventory-form__label">Warehouse</label>
                                <select name="warehouses" id="warehouses" className="inventory-form__select">
                                    <option value="Manhattan">Manhattan</option>
                                    <option value="King West">King West</option>
                                    <option value="Granville">Granville</option>
                                    <option value="San Fran">San Fran</option>
                                    <option value="Santa Monica">Santa Monica</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Montreal">Montreal</option>
                                </select>
                            </div>
                            <div className="inventory-form__buttons">
                                <Button type="cancel" className="inventory-form__button" children="Cancel" onClick={() => {
                                    this.props.history.push('/inventories')
                                }}/>
                                <Button type="add item" className="inventory-form__button" children="+ Add Item"/>
                            </div>
                        </form>
                    </div>
                    }
                </div>
            </>
        )
    }
}

export default InventoryForm;