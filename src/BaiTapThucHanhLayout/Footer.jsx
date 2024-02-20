import React, { Component } from 'react'
import "./style.css"


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2024</p></div>
                </footer>
            </div>
        )
    }
}