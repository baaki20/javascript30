const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let isBetween = false;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(this);
            if (checkbox === lastChecked || checkbox === this){
                isBetween = !isBetween;
                console.log("In between");
            }

            if (isBetween){
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));