const capitalize = (value) =>
    String(value[0]).toUpperCase() + String(value).slice(1);

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const phone = formData.get("phone");
    const reason = formData.get("reason");
    let message = formData.get("message");

    // storing capitalised names together, since its used in subject and body
    let fullName = `${capitalize(firstName)} ${capitalize(lastName)}`;

    // Subject for the automated Email
    let emailSubject = `
                Website form - 
                ${fullName} - 
                ${reason !== "other" ? capitalize(reason) : "Unknown Inquiry"}
            `;

    // ensure user message ends with punctuation
    if (!/[.!?]/.test(message[message.length - 1])) {
        message += ".";
    }

    // Body for the automated Email.
    // Contains all the info provided by the user, in a professional structure.
    let emailBody = `
                Hi SJB Safety Services,%0A
                %0A
                I am contacting you regarding ${
                    reason !== "other"
                        ? `a ${reason}`
                        : "<specify contact reasoning here>"
                },%0A
                %0A
                ${capitalize(message)}%0A

                ${phone !== "" ? `%0AMy phone number: ${phone.replace("+", "%2b")}%0A` : ""}
                %0A
                Thank you in advance,%0A
                ${fullName}.
            `;

    // Create email with given subject and body, and open in a new tab
    // Use regex to prevent: more than one space at a time; and space at start of strings
    window.open(
        `mailto:info@sjbsafety.co.uk?subject=${emailSubject
            .replace(/\s+/g, " ")
            .replace(/^\s/, "")}&body=${emailBody
            .replace(/\s{2,}/g, "")
            .replace(/^\s/, "")}`,
        "_blank"
    );
}
