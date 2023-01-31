export const cartElements = {
  cartItem : (data) => ` 
  
        <div class="cartIem">
          <div class="itemValuesAndCRUDs">

            <div class="itemValues">
              <div class='cartFirstAttr'>
                <span>Item: &nbsp; ${data.item.toUpperCase()}</span>
              </div>
              <div>
                <span>${Number(data.item.slice(3)) * 55.5}</span>
              </div>
              <div>
                <span>${data.quantity}</span>
              </div>
            </div>
            <hr class="lineB">
            <div class='cartCRUDBtns'>
              <button id='cartItem${data.item.slice(3)}' style="background-color: rgb(128, 62, 62); color: white;"> [&nbsp;🗑️&nbsp;] </button>
              <button> [&nbsp;💾&nbsp;] </button>
              <button> [&nbsp;🤍&nbsp;] </button>
            </div>
            
          </div>

          <div class="addSubBtns">
            <button id="add${data.item.toUpperCase()}" style="background-color: green;">[&nbsp; ➕ Q &nbsp;]</button>           
            <button id="sub${data.item.toUpperCase()}" style="background-color: rgb(128, 62, 62);">[&nbsp; ➖ Q &nbsp;]</button>
          </div>

        </div>  `,

  line : `<hr class="lineB">`
}