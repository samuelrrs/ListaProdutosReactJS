import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import api from './../../services/api';

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = response.data


        this.setState({ products: docs, productInfo, page })

    }

    prevPage = () => {
        const { page, productInfo } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }
    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    render() {
        const { products, page } = this.state
        return (<div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}

            <div className="actions">
                <button onClick={this.prevPage} disabled={page === 1}>Anterior</button>
                <button onClick={this.nextPage}  >Próximo</button>
            </div>
        </div>)
    }
}