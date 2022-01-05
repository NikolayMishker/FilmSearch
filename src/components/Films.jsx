import Film from "./Film";

function Films(props) {
    const {films} = props;

    return (
        <div className='films'>
            {films.map((film) => (
                <Film key={film.imdbID} {...film} />
            ))}
        </div>
    )
}

export default Films;