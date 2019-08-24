import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: '',
            price: '',
            description: '',
            sizes: [],
            breadcrumbs: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    // Get a specific product from database
    componentDidMount() {
        axios.get('/api/products')
        .then((response) => {
            console.log('Yay got data', response.data[0])
            this.setState({
                images: response.data[0].images,
                name: response.data[0].name,
                price: response.data[0].price,
                description: response.data[0].description,
                sizes: response.data[0].sizes,
                breadcrumbs: response.data[0].breadcrumbs
            })
            console.log('State has been set', this.state);
        })
        .catch((err) => {
            console.error('Uh oh did not work', err)
        })
    }

    
    render() {
        return (
            <div onClick={this.getProducts}>
                Rendering the App! Woo
            </div>
        )
    }
}

export default App;