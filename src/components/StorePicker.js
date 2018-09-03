import React, {Fragment} from "react";
import {getFunName} from "../helpers";
import PropTypes from "prop-types";


class StorePicker extends React.Component {

    static propTypes ={
        history: PropTypes.object
    };

    myInput = React.createRef();

    goToStore = (event) => {
        // 1. Stop default submiting
        event.preventDefault();
        // 2. Get text from the input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-asdasd

        this.props.history.push(`/store/${storeName}`);

    };
    componentDidMount() {
        // console.log('Mounted');
        // console.log(this);
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
                        ref={this.myInput}
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;