import { getTOPmedia, getGenre, throwQuery } from './fetch.js';
import { murkupcards } from './murkup';
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
    numberPage = this.currentPage - 1;
    totalPages = this.totalPages - 1;
    console.log('строим по индексу', numberPage);
    let min, max;

    if (this.totalPages < 5) {
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
    const PageData = await this.query(numberPage);
    session.totalPages = PageData.total_pages;
    this.fillpaginationButton();
    murkupcards(PageData.results);
    bildPagination();
  },
};

export let genresMovie = {};
export let genresTV = {};
export const ref = {
  gallary: document.querySelector('.gallery'),
  pagination: document.querySelector('.pagination'),
  searchForm: document.querySelector('.searchform'),
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
  session.query = throwQuery(e.currentTarget.elements['string'].value);
  session.changeCurrentPage(1);
}

ref.searchForm.addEventListener('submit', onSubmitSearchForm);

console.log('Hello MAIN');
firstPage();
// const foo = throwQuery('dragon');
// foo('1').then(data => console.log('data', data));
