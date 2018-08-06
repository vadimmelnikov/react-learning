import React, {Fragment} from "react";
import {getFunName} from "../helpers";


class StorePicker extends React.Component {


    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop default submiting
        event.preventDefault();
        // 2. Get text from the input

        // 3. Change the page to /store/whatever-asdasd
        console.log(this.setState);
    }
    componentDidMount() {
        console.log('Mounted');
        console.log(this);
    }
    render() {
        return (
            <Fragment>
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter a store</h2>
                    <input
                        type="text"
                        required
                        placeholder="Store Name"
                        value={getFunName()}
                        ref={this.myInput}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;