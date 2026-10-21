const formFields = [
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
    formFields.forEach(([, errorId]) => {
        document.getElementById(errorId).textContent = "";
    });
}

function showValidationError(fieldId, errorId) {
    document.getElementById(errorId).textContent = "*Wajib diisi";
    document.getElementById(fieldId).focus();
}

function renderSummary() {
    const output = document.getElementById("output");
    output.replaceChildren();

    formFields.forEach(([fieldId, , label]) => {
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

function check() {
    clearValidationMessages();

    for (const [fieldId, errorId] of formFields) {
        if (!getFieldValue(fieldId)) {
            showValidationError(fieldId, errorId);
            return false;
        }
    }

    renderSummary();
    showPopup();
    return false;
}

function showPopup() {
    const popup = document.getElementById("popup");
    const output = document.getElementById("output");
    const outputData = document.getElementById("OutputData");

    outputData.replaceChildren(...output.cloneNode(true).childNodes);
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
