const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.filmsByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.filmsByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result
};

Cinema.prototype.areFilmsByYear = function (year) {
  const result = this.films.some((film) => {
    return film.year === year;
  });
  return result
};

Cinema.prototype.areFilmsOverLength = function (time) {
  const result = this.films.some((film) => {
    return film.length > time;
  })
  return result;
};

Cinema.prototype.totalRunningTime = function () {
  let total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;
};






module.exports = Cinema;
