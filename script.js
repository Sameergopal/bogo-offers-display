
function toggleBox(boxId) {
    // Get all the boxes
    const allBoxes = document.querySelectorAll('.box');
    
    // Collapse all boxes
    allBoxes.forEach((box, index) => {
        if (index !== boxId - 1) {
            box.classList.remove('expanded');
        }
    });

    
    const clickedBox = document.querySelector(`.box:nth-child(${boxId})`);
    clickedBox.classList.toggle('expanded');
}

// Add to Cart function with success message
function addToCart() {
    // Show success message
    alert('Product added to cart successfully!');
}


document.querySelectorAll('.box select').forEach(selectElement => {
    selectElement.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});
