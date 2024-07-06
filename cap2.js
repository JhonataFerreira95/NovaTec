const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

form.addEventListener("submit", (e) =>{
    const frm = form.inProduto.value
    const price = Number(form.inPrice.value)

    const terceiro = price / 2
    const promo = (price * 2 ) + terceiro
    

    resp1.innerText = `${frm} promoção: leve 3 por apenas R$: ${promo.toFixed(2)}`
    resp2.innerText = `Leve 2 por apenas R$: ${terceiro.toFixed(2)}`

    e.preventDefault()

})
