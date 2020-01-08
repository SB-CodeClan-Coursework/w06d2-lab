const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.filmByTitle = function () {
  const result = this.films.filter((film) => {
    return film.title === "T2 Trainspotting";
  });
  return result;
};
module.exports = Cinema;
