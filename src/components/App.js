import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

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

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"/>

                </div>
                <Order/>
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
