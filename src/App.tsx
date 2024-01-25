import Search from "./components/Search";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-color9 via-color11 to-color10 min-h-screen  relative">
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 font-climate-crisis text-cyan-900 tr text-4xl ">React Bite</h1>
      <div className="absolute top-4 right-4">
        <a href="https://www.buymeacoffee.com/imPiyushKashyap">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=imPiyushKashyap&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
        </a>
      </div>
      <Search />
    </div>
  );
};

export default App;
