const send = document.querySelector("#send");
send.addEventListener("click", function(e){      //foi adicionado um evento a send chamado click que tem a função de
    e.preventDefault();                          //prevenir para que não seja recebido valor vazio.

    const name = document.querySelector("#name");  //chamando input.

    const email = document.querySelector("#email");

    const senha = document.querySelector("#senha");

    const value = name.value; //buscando a propriedade value do name onde se concentra o valor do input.

    console.log(value);
})

