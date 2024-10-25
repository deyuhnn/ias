function preventSpaces(input) {
    if (input.value.startsWith(' ')) {
        input.value = input.value.trimStart();
    }
    input.value = input.value.replace(/\s{2,}/g, ' ');
}

function handleSubmit(event) {
event.preventDefault(); 
var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

thankYouModal.show();
event.target.reset();
}
