
import './App.css'
// import { useGetPokemonByNameQuery } from '../src/features/apidata/apiSlice.js'
import { useGetPokemonByNameQuery } from './features/apidata/apiSlice'

function App() {

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state
  return (<>
    <h1>hello rtk</h1>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && (
      <div>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
    )}

  </>)
}
export default App




