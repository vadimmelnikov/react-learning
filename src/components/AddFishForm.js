import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createFish = e => {
        // 1.Stop form submiting
        e.preventDefault();

        const fish = {
            name:  this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        console.log(fish);
        this.props.addFish(fish);

        // Refresh the form
        e.currentTarget.reset();

    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name"/>
                <input type="text" ref={this.priceRef} name="price" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input type="text" ref={this.imageRef} name="image" placeholder="Image"/>
                <button type="submit">Add fish</button>
            </form>
        );
    }
}

export default AddFishForm