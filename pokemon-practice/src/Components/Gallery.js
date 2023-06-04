function Gallery({ data }) {
    const display = data.map(pokemon => {
        return (
            <li key={pokemon.name}>{pokemon.name}</li>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery