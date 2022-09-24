{
    const welcome = () => {
        console.log("Witajcie w mojej wizytówce,zapraszam do przejrzenia jej.")
    };
    welcome()
    const onChangeBackgroundClick = () => {
        const main = document.querySelector(".article");
        const nextName = document.querySelector(".nextName");

        main.classList.toggle("article__change-js");
        nextName.innerText = main.classList.contains("article__change-js") ? "szare" : "białe"
    };

    const init = () => {
        welcome();

        const button =
            document.querySelector(".button");

        button.addEventListener("click", onChangeBackgroundClick);
    };

    const button = document.querySelector(".button");
    button.addEventListener("click", onChangeBackgroundClick);
}

