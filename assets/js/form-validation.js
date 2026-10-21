const FORM_FIELDS = [
    ["nama", "id_nama", "Nama Lengkap"],
    ["identitas", "id_identitas", "No. Identitas"],
    ["notelp", "id_notelp", "No. Telepon"],
    ["usia", "id_usia", "Usia"],
    ["kelamin", "id_kelamin", "Jenis Kelamin"],
    ["tmptlahir", "id_tmptlahir", "Tempat Lahir"],
    ["tgllahir", "id_tgllahir", "Tanggal Lahir"],
    ["agama", "id_agama", "Agama"],
    ["alamat", "id_alamat", "Alamat Rumah"]
];

function getFieldValue(fieldId) {
    return document.getElementById(fieldId).value.trim();
}

function clearValidationMessages() {
    FORM_FIELDS.forEach(([, errorId]) => {
        document.getElementById(errorId).textContent = "";
    });
}

function showValidationError(fieldId, errorId) {
    document.getElementById(errorId).textContent = "*Wajib diisi";
    document.getElementById(fieldId).focus();
}

function renderSummary(output) {
    output.replaceChildren();

    FORM_FIELDS.forEach(([fieldId, , label]) => {
        const row = document.createElement("div");
        const labelElement = document.createElement("strong");
        labelElement.textContent = `${label}: `;
        row.append(labelElement, document.createTextNode(getFieldValue(fieldId)));

        if (fieldId === "usia") {
            row.append(document.createTextNode(" tahun"));
        }

        output.append(row);
    });
}

function validateForm() {
    clearValidationMessages();

    for (const [fieldId, errorId] of FORM_FIELDS) {
        if (!getFieldValue(fieldId)) {
            showValidationError(fieldId, errorId);
            return false;
        }
    }

    return true;
}

function showPopup(popup, outputData, summary) {
    outputData.replaceChildren(...summary.cloneNode(true).childNodes);
    popup.hidden = false;
}

function closePopup(popup) {
    popup.hidden = true;
}

const form = document.getElementById("registrationForm");
const output = document.getElementById("output");
const popup = document.getElementById("popup");
const outputData = document.getElementById("outputData");
const closeButton = document.getElementById("closePopup");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    renderSummary(output);
    showPopup(popup, outputData, output);
});

closeButton.addEventListener("click", () => closePopup(popup));
