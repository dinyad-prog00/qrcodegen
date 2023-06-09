import { Provider } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";
import store from "./redux/store";
function App() {
      return (
        <Provider store={store}>
          <Dashboard/>
        </Provider>
      )
}

export default App;
