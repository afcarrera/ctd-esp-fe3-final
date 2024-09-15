import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { theme } = useContextProvider();
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={`${theme}`}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr key={detail.id}>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail