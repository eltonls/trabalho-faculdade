const profilesRow = document.getElementById("profiles-row");
const profilesImgs = Array.from(document.getElementsByClassName("profile"));
const testamentElement = document.getElementById("testament");
const customerNameElement = document.getElementById("customer-name");
const customerTitleElement = document.getElementById("customer-title");

// MENSAGENS PRÉ-PRONTAS:
const customerTestament = {
    link: {
        text: `"Melhor plataforma para cortar matinho e quebrar vaso. Tem minha confiança, mas por um outro lado a princesa tá puta que eu não paro de jogar BotW :("`, 
        customerName: "Link Hylian",
        customerTitle: "Herói do tempo"
    },
    mario: {
        text: `"De todas as plataformas que já usei, essa foi a única que não me deu o cano. Extremamente feliz."`,
        customerName: "Mario",
        customerTitle: "Encanador"
    },
    kirby: {
        text: `"Se eu engolisse essa plataforma eu me tornaria a maior gamestation da américa latina fácil!"`,
        customerName: "Kirby",
        customerTitle: "Cosplayer de Pacman"
    },

    conker: {
        text: `"burrr!! Só tô aqui para completar a cota dos jogos que mereccem um remake e nunca vão ganhar. Mas a plataforma é boa! Eu prometo"`,
        customerName: "Conker",
        customerTitle: "Desempregado"
    }
}


const removeActiveState = (elementArray) => {
    elementArray.forEach((element) => {
        element.classList.remove("active");
    })
}

profilesRow.addEventListener("click", (evt) => {
    removeActiveState(profilesImgs);
    evt.target.classList.add("active"); 
	
	switch(evt.target.id) {
		case "conker-profile": 
            testamentElement.innerText = customerTestament.conker.text;			
            customerNameElement.innerText = customerTestament.conker.customerName;
            customerTitleElement.innerText = customerTestament.conker.customerTitle;
            break;
        case "kirby-profile":
            testamentElement.innerText = customerTestament.kirby.text;
            customerNameElement.innerText = customerTestament.kirby.customerName;
            customerTitleElement.innerText = customerTestament.kirby.customerTitle; 
            break;
        case "mario-profile":
            testamentElement.innerText = customerTestament.mario.text;
            customerNameElement.innerText = customerTestament.mario.customerName;
            customerTitleElement.innerText = customerTestament.mario.customerTitle;
            break;
        case "link-profile":
            testamentElement.innerText = customerTestament.link.text;
            customerNameElement.innerText = customerTestament.link.customerName;
            customerTitleElement.innerText = customerTestament.link.customerTitle;
            break;
	}
});
