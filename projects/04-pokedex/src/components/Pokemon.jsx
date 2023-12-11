export function Pokemon({ pokemon }) {
  return (
    <>
      {pokemon && (
        <section>
          <h3>{pokemon.name}</h3>
          <div className="types">
            {pokemon.types.map((type, index) => {
              return (
                <span className={`type ${type.type.name}`} key={index}></span>
              );
            })}
          </div>
          <div className="pokemon-content">
            <span>#{pokemon.id}</span>
            <img src={pokemon.image} alt={pokemon.name} />
            <ul>
              {pokemon.stats.map((stat, index) => {
                return (
                  <li key={index}>
                    <strong>{stat.stat.name}:</strong> {stat.base_stat}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
