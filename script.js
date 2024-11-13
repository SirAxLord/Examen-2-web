function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");

    if (taskInput.value.trim()) {
        const card = document.createElement("div");
        card.classList.add("card", prioritySelect.value);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            if (card.classList.contains("alta")) {
                showModal(card);
            } else {
                container.removeChild(card);
            }
        }

        cardContent.appendChild(text);
        cardContent.appendChild(deleteBtn);
        card.appendChild(cardContent);
        container.appendChild(card);

        taskInput.value = "";
    }
}

function showModal(card) {
    const modal = document.getElementById("modal");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const container = document.querySelector(".main-container");

    modal.style.display = "block";

    confirmBtn.onclick = function () {
        container.removeChild(card);
        modal.style.display = "none";
    }

    cancelBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

