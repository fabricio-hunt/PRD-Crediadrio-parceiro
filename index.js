
function toggleContent() {
    var gridContent = document.getElementById('gridContent');
    var button = document.querySelector('.verMaisParceiros');
    var recolhido = document.getElementById('grid-recolhivel');

	  
    if (gridContent.style.height === 'auto') {
      gridContent.style.height = '39%';
      gridContent.style.overflow = 'hidden';
      button.innerText = 'Ver todos os Parceiros Bemol';
      recolhido.style.height = '440px';
    } else {
      gridContent.style.height = 'auto';
      gridContent.style.overflow = 'visible';
      gridContent.style.background = 'none';
      button.innerText = 'Ver Menos';
      recolhido.style.height = '830px';
    }
  }



  