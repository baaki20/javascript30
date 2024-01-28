const inputs = document.querySelectorAll('.controls input');

function handleInputs(){
    const suffix = this.dataset.sizing || '';

    //console.log(this);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
         
}

inputs.forEach(input => input.addEventListener('change', handleInputs));
inputs.forEach(input => input.addEventListener('mousemove', handleInputs));