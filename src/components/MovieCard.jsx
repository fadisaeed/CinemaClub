function MovieCard({ title, year, rating, available, popular,genre,duration }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      <p>genre: {genre}</p>
      {duration>130&&<p>duration: {duration}</p>}
      {available &&<p>זמין לצפייה</p>}
      {popular &&<p>בחירת הצוות</p>}
    </article>
  );
}

export default MovieCard;