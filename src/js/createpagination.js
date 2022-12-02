import { session, ref } from './main';

export function bildPagination() {
  let stringHTML = '';
  if (session.pagination.arrowLeft === 0) {
    stringHTML += `<span class="pag_arrowleft grey">
                    <svg class="btn__icon">
                      <use href="#arrowleft"></use>
                    </svg></span>`;
  } else {
    stringHTML += `<span class="pag_arrowleft">
                    <svg class="btn__icon">
                      <use href="#arrowleft"></use>
                    </svg></span>`;
  }

  if (session.pagination.buttonStart === 1) {
    stringHTML += `<span class="pag_block" data-page="1">1</span>`;
  }
  
  if (session.pagination.gapLeft === 1) {
    stringHTML += `<span class="pag_dots">...</span>`;
  }
  
  session.pagination.button.forEach((el, index) => {
    
    if (el === 1) {
      if (index + 1 === Number(session.currentPage)) {
        stringHTML += `<span class="pag_block active" data-page="${
          index + 1
        }">${index + 1}</span>`;
      } else {
        stringHTML += `<span class="pag_block " data-page="${index + 1}">${
          index + 1
        }</span>`;
      }
    }

  });

  if (session.pagination.gapRight === 1) {
    stringHTML += `<span class="pag_dots">...</span>`;
  }

  if (session.pagination.buttonFinish === 1) {
    stringHTML += `<span class="pag_block" data-page="${session.totalPages}">${session.totalPages}</span>`;
  }

  if (session.pagination.arrowRight === 0) {
    stringHTML += `<span class="pag_arrowright grey">
                    <svg class="btn__icon">
                      <use href="#arrowright"></use>
                    </svg></span>`;
  } else {
    stringHTML += `<span class="pag_arrowright">
                    <svg class="btn__icon">
                      <use href="#arrowright"></use>
                    </svg></span>`;
  }
 
  ref.pagination.innerHTML = stringHTML;

  document.querySelector('.pag_arrowleft').addEventListener('click', () => {
    session.changeCurrentPage(session.currentPage - 1);
  });
  document.querySelector('.pag_arrowright').addEventListener('click', () => {
    session.changeCurrentPage(session.currentPage + 1);
  });
  document.querySelectorAll('.pag_block').forEach(el => {
    el.addEventListener('click', e => {
      console.log(e.target.dataset.page);
      session.changeCurrentPage(e.target.dataset.page)
    });
  });
}
