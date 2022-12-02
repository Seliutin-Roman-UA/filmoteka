import { ref, genresMovie, genresTV } from './main';

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
          return ` <li class="card" data-id="${el.id} data-media_type="${
            el.media_type
          }">
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
  
}
