import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (e) =>{
        // console.log(e.currentTarget.value);
        //update that fish
        // 1. Take a copy of the current fish
        const updateFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value,
        };
        // 2.
        this.props.updateFish(this.props.index, updateFish);
    };
    render() {
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                <option value="available">Fresh!!!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.name}/>
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm;