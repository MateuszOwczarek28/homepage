{
    const welcome = () => {
        console.log("Witajcie w mojej wizytówce,zapraszam do przejrzenia jej.");
    }

    const OnChangeBacgroundClic = () => {
        main.classList.toggle("article__change-js");
        nextName.innerText = main.classList.contains("article__change-js") ? "szare" : "białe"
    };

    welcome();

    const button = document.querySelector(".button")
    const main = document.querySelector(".article")
    const nextName = document.querySelector(".nextName")

    button.addEventListener("click", OnChangeBacgroundClic);
}

