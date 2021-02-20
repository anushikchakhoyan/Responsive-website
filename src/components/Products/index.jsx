import React, {useState} from "react";
import {map} from "lodash-es";
import {Row} from "react-bootstrap";

import ProductItem from "./Item";
import "./index.scss";

const Products = () => {
    const [items] = useState(
        [
            {
                title: 'Adidas sport',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
                discount: 30,
                price: 99.9,
                newPrice: 50,
                isLimited: true,
                isFavorite: true
            },
            {
                title: 'Adidas sport',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
                discount: 30,
                price: 99.9,
                newPrice: 50,
                isLimited: false,
                isFavorite: false
            },
            {
                title: 'Adidas sport',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
                discount: 30,
                price: 99.9,
                newPrice: 50,
                isLimited: false,
                isFavorite: false
            },
            {
                title: 'Adidas sport',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
                discount: 30,
                price: 99.9,
                newPrice: 50,
                isLimited: true,
                isFavorite: false
            },
            {
                title: 'Adidas sport',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
                discount: 30,
                price: 99.9,
                newPrice: 50,
                isLimited: true,
                isFavorite: false
            },
            {
                title: 'Adidas sport',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                attachment: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c980ea1ef3f344159dcdac3700723bf3_9366/Run_60s_2.0_Shoes_Black_FZ0958_04_standard.jpg",
                discount: 30,
                price: 99.9,
                newPrice: 50,
                isLimited: true,
                isFavorite: false
            }
        ]
    )

    return (
        <Row className="py-4 px-0">
            {map(items, (item, index) => (
                <ProductItem {...item} key={index}/>
            ))}
        </Row>
    )
}

export default Products;
