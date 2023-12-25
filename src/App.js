
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import request from './request';



function App() {
  return (
    <div className='App'>
<Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGIONALS" fetchUrl={request.Netflix_origionals} isLargeRow />
    <Row title="Commedy_move" fetchUrl={request.Commedy_move}/>
    <Row title="Action_move" fetchUrl={request.Action_move}/>
    <Row title="Horror_move" fetchUrl={request.Horror_move}/>
    <Row title="Romancy_Move" fetchUrl={request.Romancy_Move}/>
    <Row title="Toprated_move" fetchUrl={request.Toprated_move}/>
    <Row title="Documentaries" fetchUrl={request.Documentaries}/>
    <Row title="Trending Now" fetchUrl={request.fetchTrednding} />
    </div>
  );
}

export default App;
