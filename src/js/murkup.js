import { ref, genresMovie, genresTV } from './main';
import { infoAboutMovie } from './fetch';

export function murkupcards(dataArray) {

  ref.gallary.innerHTML = dataArray
    .map(el => {
      let genres = '';
      switch (el.media_type) {
        case 'movie':
          genres =
            el.genre_ids.length === 0
              ? ''
              : el.genre_ids.map(el => genresMovie[el]).join(', ');
          return ` <li class="card" data-id="${el.id}" data-media_type="${
            el.media_type
          }">
            <img class="card__img" src="${
              el.poster_path
                ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                : `./noimage.c59940df.jpg`
            }" alt="poster">
            <p class="card__name">${el.title}</p>
            <p class="card__info"><span class="card__ganre">${genres} |</span>
            <span>${
              el.release_date ? el.release_date.slice(0, 4) : 'unknown'
            }</span>
            <span class="card__rating"> ${
              el.popularity ? el.popularity.toFixed(1) : 'unknown'
            }</span></p>
            </li>`;
        case 'tv':
          genres =
            el.genre_ids.length === 0
              ? ''
              : (el.genres = el.genre_ids.map(el => genresTV[el]).join(', '));
          return ` <li class="card" data-id="${el.id}" data-media_type="${
            el.media_type}">
            <img class="card__img" src="${
              el.poster_path
                ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                : `./noimage.c59940df.jpg`
            }" alt="poster">
            <p class="card__name">${el.name}</p>
            <p class="card__info"><span class="card__ganre">${genres} |</span>
            <span>${
              el.first_air_date ? el.first_air_date.slice(0, 4) : 'unknown'
            }</span>
            <span class="card__rating"> ${
              el.popularity ? el.popularity.toFixed(1) : 'unknown'
            }</span></p>
            </li>`;
        case 'person':
          return ` <li class="card">
            <img class="card__img" src="${
              el.profile_path
                ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                : `./noimage.c59940df.jpg`
            }" alt="poster">
            <p class="card__name">${el.name}</p>
            <p class="card__info"><span class="card__ganre">person |</span>
                 <span class="card__rating"> ${
                   el.popularity ? el.popularity.toFixed(1) : 'unknown'
                 }</span></p>
            </li>`;

        default:
          break;
      }
    })
    .join('');
  document.querySelectorAll(".card")
    .forEach(el => el.addEventListener('click', openModal))
  
}

async function openModal(e) {
  const id = e.currentTarget.dataset.id;
  const type = e.currentTarget.dataset.media_type;
  const data = await infoAboutMovie(type, id);
  murkupModal(data, type);
}

function murkupModal(data, type) {
   console.log("about film!!! >>>> ", data, type);
  let genres = '';
  let mobileHTML = "";
      switch (type) {
        case 'movie':
          genres =
            data.genres.length === 0
              ? ''
              : data.genres.map(el => el.name).join(', ');
     
          mobileHTML = `<img class="modal__img" src="${data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : `./noimage.c59940df.jpg`
            }" alt="poster">` +
            `<div modal__info><p class="modal__name">${data.title}</p>
            <p class="modal__voite"> ${data.vote_average}/${data.vote_count}</p>
            <p class="modal__popularity"> ${data.popularity}</p>
            <p class="modal__original_title"> ${data.original_title}</p>
            <p class="modal__ganre">${genres}</p>
            <p class="modal__overview">${data.overview}</p></dir>`;
          break;
        
        case 'tv':
          genres =
            data.genres.length === 0
              ? ''
              : data.genres.map(el => el.name).join(', ');
          mobileHTML = `<img class="modal__img" src="${data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : `./noimage.c59940df.jpg`
            }" alt="poster">
            <div modal__info><p class="modal__name">${data.name}</p>
            <p class="modal__voite"> ${data.vote_average}/${data.vote_count}</p>
            <p class="modal__popularity"> ${data.popularity}</p>
            <p class="modal__original_title"> ${data.original_name}</p>
            <p class="modal__ganre">${genres}</p>
            <p class="modal__overview">${data.overview}</p></dir>`;
          break;
        default:
        break;
  }
  ref.modal.innerHTML = mobileHTML;
}