import React, {Fragment} from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
                <form action="" className="store-selector">
                    <h2>Please Enter a store</h2>
                    <input type="text" required placeholder="Store Name"/>
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;