const form = document.getElementById("supportForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const data = {

        company: document.getElementById("company").value.trim(),

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        subject: document.getElementById("subject").value.trim(),

        issue: document.getElementById("issue").value.trim()

    };

    try {

        const response = await fetch("http://localhost:5678/webhook-test/customer-support", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        if (response.ok) {

            alert("Support request submitted successfully!");

            form.reset();

        } else {

            alert("Failed to submit request.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to n8n. Make sure your workflow is listening.");

    }

});