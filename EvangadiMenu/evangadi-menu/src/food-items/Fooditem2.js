import React, { Component } from 'react'

export default class Fooditem2 extends Component {
  render() {
    return (
      <div class="all-container">
        <div class="single-food">
          <div class="img">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" />
            
          </div>
          <div class="title-price">
            <h3>TIBS (ጥብስ)</h3>
            <p>$22.99</p>
          </div>
          <div class="food-desc">
            Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is
            one of the most popular dishes among Ethiopians. It comes in a
            variety of forms, varying in type, size or shape of the cuts of meat
            used, and can range from hot to mild or contain...
          </div>
        </div>
      </div>
    )
  }
}
