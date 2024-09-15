import Card from '../Components/Card'
import { useCharStates } from "../Context";
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useCharStates();
  const { theme } = useContextProvider();
  console.log(state);
  return (
    <main className={`${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.list.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </main>
  )
}

export default Home