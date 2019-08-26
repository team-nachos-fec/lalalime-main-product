import React from 'react';
import axios from 'axios';
import ScrollingImages from './ScrollingImages.js';
import ImagesList from './ImagesList.js';
import Breadcrumbs from './Breadcrumbs.js';
import ProductDetail from './ProductDetail.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: '',
            price: '',
            description: '',
            sizes: [],
            breadcrumbs: [],
            currentImages: []
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
                breadcrumbs: response.data[0].breadcrumbs,
                currentImages: response.data[0].images[0]
            })
            console.log('State has been set', this.state);
        })
        .catch((err) => {
            console.error('Uh oh did not work', err)
        })
    }

    
    render() {
        return (
            <div>
              <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
              <div className="small-image-box">
                <ScrollingImages currentImages={this.state.currentImages.slice(2)} />
              </div>
              <div className="large-image-box">
                <ImagesList currentImages={this.state.currentImages.slice(2)} />
              </div>
              <ProductDetail name={this.state.name} price={this.state.price} description={this.state.description}/>
            </div>
        )
    }
}

export default App;