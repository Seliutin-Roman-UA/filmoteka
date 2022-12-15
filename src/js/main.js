import { getTOPmedia, getGenre, throwQuery } from './fetch.js';
import { murkupcards } from './murkup.js';
import { bildPagination } from './createpagination.js';

export const session = {
  currentPage: 1,
  totalPages: 1,
  pagination: {
    arrowLeft: null,
    buttonStart: null,
    gapLeft: null,
    button: [],
    gapRight: null,
    buttonFinish: null,
    arrowRight: null,
  },
  query: null,

  fillpaginationButton() {
    let numberPage = this.currentPage - 1;
    let totalPages = this.totalPages - 1;
    let min, max;

    if (this.totalPages < 5) {
      this.pagination.button = [];
      for (i = 0; i <= totalPages; i++) this.pagination.button[i] = 1;
      this.pagination.arrowLeft = 0;
      this.pagination.buttonStart = 0;
      this.pagination.gapLeft = 0;
      this.pagination.gapRight = 0;
      this.pagination.buttonFinish = 0;
      this.pagination.arrowRight = 0;
      return;
    }
    min = numberPage - 2;
    max = numberPage + 2;
    if (numberPage < 3) {
      min = 0;
      max = 4;
    }
    if (totalPages - numberPage < 3) {
      min = totalPages - 4;
      max = totalPages;
    }

    for (i = 0; i <= totalPages; i++) {
      this.pagination.button[i] = 0;
      if (i >= min && i <= max) this.pagination.button[i] = 1;
    }
    this.pagination.arrowLeft = numberPage > 0 ? 1 : 0;
    this.pagination.buttonStart = min >= 2 ? 1 : 0;
    this.pagination.gapLeft = min >= 1 ? 1 : 0;
    this.pagination.gapRight = totalPages - max > 0 ? 1 : 0;
    this.pagination.buttonFinish = totalPages - max <= 1 ? 0 : 1;
    this.pagination.arrowRight = max < totalPages ? 1 : 0;
  },
  async changeCurrentPage(number) {
    const numberPage = Number(number);
    if (numberPage < 1) {
      return 'reject';
    }
    if (numberPage > this.totalPages) {
      return 'reject';
    }
    this.currentPage = numberPage;
    const pageData = await this.query(numberPage);
    session.totalPages = pageData.total_pages;
    this.fillpaginationButton();  
    murkupcards(pageData.results);
    bildPagination();
  },
};

export let genresMovie = {};
export let genresTV = {};
export const ref = {
  gallary: document.querySelector('.gallery'),
  pagination: document.querySelector('.pagination'),
  searchForm: document.querySelector('.searchform'),
  modal: document.querySelector('.modal')
};
// block functions

async function firstPage() {
  genresMovie = await getGenre('movie');
  genresTV = await getGenre('tv');
  session.query = getTOPmedia;
  session.changeCurrentPage(1);
}
function onSubmitSearchForm(e) {
  e.preventDefault();
  const searchString = e.currentTarget.elements['string'].value;
  if (searchString) {session.query = throwQuery(searchString)
  } else { session.query = getTOPmedia};
  session.changeCurrentPage(1);
}

ref.searchForm.addEventListener('submit', onSubmitSearchForm);
ref.searchForm.addEventListener('focusout', onSubmitSearchForm);

firstPage();

