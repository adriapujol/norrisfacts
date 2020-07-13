import React, { Component } from 'react';


class Category extends Component {
    render() {
        return (
            <>
                <label>Category:</label>
                <select name="category" id="category">
                    <option value="animal">Animal</option>
                    <option value="celebrity">Celebrity</option>
                    <option value="money">Money</option>
                    <option value="history">History</option>
                </select>
                <input type="submit" value="Get Fact"></input>
            </>
        )
    }
}


export default Category;