import React, { Component } from 'react'

export default class Fooditem1 extends Component {
  render() {
    return (
      <div class="all-container">
         <div class="single-food">
          <div class="img">
            <img
              src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" />
           
          </div>
          <div class="title-price">
            <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
            <p>$5.99</p>
          </div>
          <div class="food-desc">
            Timatim Salata refers to a type of fresh Ethiopian tomato salad
            that’s also popular in Eritrea. It’s made with diced tomatoes,
            minced onions, and finely chopped peppers dressed with a mixture of
            berbere spices, olive oil, vinegar, and lemon juice.
          </div>
        </div>
      </div>
    )
  }
}
