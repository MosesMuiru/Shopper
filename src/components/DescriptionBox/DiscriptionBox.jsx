import React from 'react'
import "./DiscriptionBox.css"

function DiscriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Deleniti expedita pariatur minus reprehenderit vel quibusdam ipsam esse delectus ad cupiditate.
                Illo eos optio eius minima. lore14
               </p>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vel possimus sunt quis placeat ratione rem labore vero fugiat ad facilis iure hic natus et illo recusandae. Eaque, cumque eveniet?</p>
        </div>
    </div>
  )
}

export default DiscriptionBox