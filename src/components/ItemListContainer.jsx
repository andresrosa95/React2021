import React from 'react'
import ItemCount from './ItemCount'

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
      <ItemCount min={1} max={5} />
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://www.alishop.com.ar/wp-content/uploads/2021/07/HP-OMEN-GAMING-Core-2.png" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto2}</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <ItemCount min={1} max={8} />
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://www.notebookcheck.org/typo3temp/_processed_/6/8/csm_4_to_3_Teaser_Samsung_Galaxy_Z_Flip3_5G_0e58a9eec7.jpg" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto3}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <ItemCount min={1} max={12} />
    </div>
  </div>
</div>
<br />
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://images.fravega.com/f1000/982c7f64523f52124013c722d110350c.jpg" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto4}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <ItemCount min={1} max={5} />
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/1/6/1631641069_1664337_1.jpg" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto5}</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <ItemCount min={1} max={6} />
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://images.fravega.com/f500/78a9817a9cfa14dd931326fdbc69a386.jpg" alt="Card image cap" height="400"/>
    <div class="card-body">
      <h5 class="card-title">{props.producto6}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <ItemCount min={1} max={7} />
    </div>
  </div>
</div>
        </div>
    )
}

export default ItemListContainer
