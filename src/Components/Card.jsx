import { Link } from "react-router-dom";
import { useCharStates } from "../Context";


const Card = ({ char }) => {
  const { state, dispatch } = useCharStates();
  const isFav = state.favs.find((fav) => fav.id === char.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: char });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="./images/doctor.jpg" alt="" />
        <Link to={"/detail/" + char.id}>
          <h2>{char.name}</h2>
          <h4>{char.username}</h4>
        </Link>
        <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
