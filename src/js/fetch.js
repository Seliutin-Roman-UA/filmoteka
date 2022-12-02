export async function getTOPmedia(i) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=09fddff29ca445d38e447ae99342142f&page=${i}`
    );
    const data = await response.json();
    return data;
  } catch (arror) {
    console.log('i am so sorry', arror.message);
  }
}
export  function throwQuery (str) {
 return async function  getMediaByString (i) {try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=09fddff29ca445d38e447ae99342142f&page=${i}&query=${str}`
    );
    const data = await response.json();
   return {
     total_pages: data.total_pages,
     results: data.results.map(el => ({ ...el, media_type: 'movie' })),
   };
  } catch (arror) {
    console.log('i am so sorry', arror.message);
  }
}}

export async function getGenre(type) {
  let url = '';
  if (type === 'movie')
    url = `https://api.themoviedb.org/3/genre/movie/list?api_key=09fddff29ca445d38e447ae99342142f&language=en-US`;
  if (type === 'tv')
    url = `https://api.themoviedb.org/3/genre/tv/list?api_key=09fddff29ca445d38e447ae99342142f&language=en-US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const g = {};
    data.genres.forEach(el => (g[el.id] = el.name));
    return g;
  } catch (arror) {
    console.log('i am so sorry', arror.message);
  }
}
