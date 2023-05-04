import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { SpMenuModal } from "./SpMenuModal";

function App() {
  return (
    <div className="relative h-full">
      <SpMenuModal />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
