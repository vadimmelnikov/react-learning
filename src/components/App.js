import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    componentDidMount(){
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}`, {
            context: this,
            state: "fishes"
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = (fish) =>{
        // 1. take a copy of the exsiting state
        const fishes = {...this.state.fishes};
        // 2. Add a new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({fishes});
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({ order });
    };

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            >
                                {key}
                            </Fish>
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
