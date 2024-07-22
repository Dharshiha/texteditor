document.addEventListener("DOMContentLoaded", function() {
  const fontSelect = document.getElementById("fontfam");
  const variantSelect = document.getElementById("vari");
  const submitButton = document.getElementById("sum");

  
  function loadFonts() {
      fetch('C:/Users/DHARSHIHA/OneDrive/Desktop/puntpartners/link.json')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Error');
              }
              return response.json();
          })
          .then(data => {
              
              fontSelect.innerHTML = '';
              variantSelect.innerHTML = '';

              
              Object.keys(data).forEach(font => {
                  const option = document.createElement('option');
                  option.value = font;
                  option.textContent = font;
                  fontSelect.appendChild(option);
              });

            
              updateVariantDropdown();

            
              fontSelect.addEventListener('change', updateVariantDropdown);
          })
          .catch(error => {
              console.error('Error loading fonts:', error);
          });
  }

  
  function updateVariantDropdown() {
      const selectedFont = fontSelect.value;
      const variants = Object.keys(fonts[selectedFont]);

      
      variantSelect.innerHTML = '';

      
      variants.forEach(variant => {
          const option = document.createElement('option');
          option.value = variant;
          option.textContent = variant;
          variantSelect.appendChild(option);
      });
  }

  
  submitButton.addEventListener('click', function(event) {
      event.preventDefault(); 

      const selectedFont = fontSelect.value;
      const selectedVariant = variantSelect.value;
      const isItalic = document.getElementById('toggle').checked;

      applyFont(selectedFont, selectedVariant, isItalic);
  });

  
  function applyFont(font, variant, italic) {
      const textarea = document.getElementById('ctext');
      textarea.style.fontFamily = font;
      textarea.style.fontWeight = variant.includes('Bold') ? 'bold' : 'normal';
      textarea.style.fontStyle = italic ? 'italic' : 'normal';
  }

  
  loadFonts();
});
