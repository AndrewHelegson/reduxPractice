/* import logo from './logo.svg'; */
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const passengers = useSelector(state => state.passengers)
  const rabbits = useSelector(state => state.rabbits)

  const plusPassenger = () => {
    dispatch({ type: "ADD_PASSENGERS", payload: 1 })
  }
  const minusPassenger = () => {
    dispatch({ type: "REMOVE_PASSENGERS", payload: 1 })
  }
  const plusRabbit = () => {
    dispatch({ type: "ADD_RABBITS", payload: 1 })
  }
  const minusRabbit = () => {
    dispatch({ type: "REMOVE_RABBITS", payload: 1 })
  }



  return (
    <div className="App">
      <p className="header" >ELEKTRICHKA PASSANGERS COUNTER</p>
      <img className="pic" alt="34" src="https://s.ura.news/760/images/news/upload/news/393/070/1052393070/037417e5474c85587d1eadce47759a89_250x0_960.720.0.0.jpg" />
      <p className="text">Количество пассажиров: <span className="number">{passengers}</span></p>
      <div>
        <button onClick={() => plusPassenger()} className="buttonPlus">+1 пассажир</button>
        <button onClick={() => minusPassenger()} className="buttonMinus" >-1 пассажир</button>
      </div>
      <p className="text">Количество зайцев: <span className="number">{rabbits}</span></p>
      <div>
        <button onClick={() => plusRabbit()} className="buttonPlus">+1 безбилетник</button>
        <button onClick={() => minusRabbit()} className="buttonMinus" >-1 безбилетник</button>
      </div>
      <div>
        <p>Статистика:</p>
        <p>процент безбилетников равен:</p>
        <p>{Math.round((rabbits / passengers) * 100)}%</p>
      </div>

    </div>
  );
}

export default App;
