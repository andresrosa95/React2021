import React from 'react'

function ItemListContainer(props) {
    console.log(props)
    return (
        <div>
        <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://mundoaltavoces.com/wp-content/uploads/2021/02/JBL-XTREME-3-PORTADA.jpg" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto1}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://www.alishop.com.ar/wp-content/uploads/2021/07/HP-OMEN-GAMING-Core-2.png" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto2}</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://www.notebookcheck.org/typo3temp/_processed_/6/8/csm_4_to_3_Teaser_Samsung_Galaxy_Z_Flip3_5G_0e58a9eec7.jpg" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto3}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        </div>
    )
}

export default ItemListContainer
