const loadContactPage = function(){
    const contacts = [
        {
            name: "God",
            title: "Manager",
            phoneNo: "+44 798 765 4321",
            email: "creatorOfAll@heavenlymail.com"
        },
        {
            name: "Jesus",
            title: "Chef",
            phoneNo: "+44 712 345 6789",
            email: "saviorOfTheWorld@heavenlymail.com"
        },
        {
            name: "Angel Michael",
            title: "Waiter",
            phoneNo: "+44 745 123 6789",
            email: "mightyWarrior@heavenlymail.com"
        }
    ];

    const contentDiv = document.getElementById("content");
    const divsCont = document.createElement("div");
    divsCont.id = "divs-cont-contact";
    const title = document.createElement("h1");
    title.innerText = "Contact Us";
    title.setAttribute("class","contact-title");
    contentDiv.appendChild(title);
    contacts.forEach((contact)=>{
        const contactDiv = document.createElement("div");
        contactDiv.setAttribute("class","contact-item");
        contactDiv.innerHTML += `<h2>${contact.name}</h2><div class="contactP"><p><span>Title:</span> ${contact.title}</p><p><span>Phone Number:</span> ${contact.phoneNo}</p><p><span>Email:</span> ${contact.email}</p></div>`;
        divsCont.appendChild(contactDiv);
    })
    
    contentDiv.appendChild(divsCont)
}

export default loadContactPage;