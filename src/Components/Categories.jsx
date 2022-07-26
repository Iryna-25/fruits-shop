import React, {Component} from "react";

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'Avocados',
                    name: 'Avocados'
                },
                {
                    key: 'Lemons',
                    name: 'Lemons'
                },
                {
                    key: 'Bananas',
                    name: 'Bananas'
                },
                {
                    key: 'Mangos',
                    name: 'Mangos'
                },
                {
                    key: 'Pineapples',
                    name: 'Pineapples'
                },
                {
                    key: 'Kiwis',
                    name: 'Kiwis'
                },
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={ () => this.props.chooseCategory(el.key)} >{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;