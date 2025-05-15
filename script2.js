document.addEventListener("DOMContentLoaded", function () {
    const contacts = [];
    const maxContacts = 7;
    const contactList = document.getElementById("contactList");

    window.addContact = function () {
        const contactInput = document.getElementById("contactInput");
        const name = contactInput.value.trim();

        if (name) {
            if (contacts.length >= maxContacts) {
                contacts.shift();
            }
            contacts.push(name);
            contactInput.value = "";
            updateList();
        }
    };

    window.removeContact = function () {
        if (contacts.length > 0) {
            contacts.pop();
            updateList();
        }
    };

    function updateList() {
        contactList.innerHTML = "";
        contacts.forEach((contact) => {
            const li = document.createElement("li");
            li.textContent = contact;
            contactList.appendChild(li);
        });
    }
});
