import './styles.css';
import {Header} from "./components/Header";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage"
import FormComponents from "./pages/FormComponents/FormComponents";
import GeneralInfo from "./pages/GeneralInfo";
import {Route, Routes} from "react-router-dom";
import Handles from "./pages/FormComponents/Handles/Handles";
import RadioButton from "./pages/FormComponents/Handles/RadioButton";
import CheckBox from "./pages/FormComponents/Handles/CheckBox";
import InputFiels from "./pages/FormComponents/InputFields/InputFiels";
import Autocomplete from "./pages/FormComponents/InputFields/Autocomplete";

function App() {

  return (
    <>
      <Header/>
        <div className="flex">
        <Navigation />
        <div className="container">
            <Routes>
                <Route path="/"  index element={<MainPage/>}/>
                <Route path="/general_info" element={<GeneralInfo/>}/>
                <Route path="/form_components" element={<FormComponents/>}/>
                /*handles*/
                <Route path="/form_components/handles" element={<Handles/>}/>
                <Route path="/form_components/handles/radiobutton" element={<RadioButton/>}/>
                <Route path="/form_components/handles/checkbox" element={<CheckBox/>}/>
                /*inputfields*/
                <Route path="/form_components/inputfields" element={<InputFiels/>}/>
                <Route path="/form_components/inputfields/autocomplete" element={<Autocomplete/>}/>
            </Routes>
        </div>
    </div>
    </>
  );
}

export default App;
