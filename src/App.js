
import './App.css';
import Row from './Row';
import request from './request';



function App() {
  return (
    <div className='App'>
    <div> netflix project</div>
    <Row title="Trending Now" fetchUrl={request.fetchTrednding}/>
    <Row title="Commedy_move" fetchUrl={request.Commedy_move}/>
    <Row title="Action_move" fetchUrl={request.Action_move}/>
    <Row title="Documentaries" fetchUrl={request.Documentaries}/>
    <Row title="Horror_move" fetchUrl={request.Horror_move}/>
    <Row title="Romancy_Move" fetchUrl={request.Romancy_Move}/>
    <Row title="Toprated_move" fetchUrl={request.Toprated_move}/>
    <Row title="NETFLIX ORIGIONALS" fetchUrl={request.Netflix_origionals}/>
    </div>
  );
}

export default App;
