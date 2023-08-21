import HandleNote from './HandleNote'
const Home = (props) => {
  return (
    <div>
    <HandleNote showAlert={props.showAlert}/>
      {/* <Notes showAlert={props.showAlert}/> */}
    </div>
  );
};

export default Home;
