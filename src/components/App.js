import logo from '../images/logo.svg';
import Board from './Board';

function App() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <header>
      <img src={logo} className="App-logo w-12 inline-block" alt="logo" />
      Pacman React App
      </header>

      {/* BOARD */}
      <Board />

      {/* FORM CONTROL */}
      <form className="mt-3 p-3 shadow overflow-hidden sm:rounded-md">
      <div className="p-3 border-gray-200 rounded-md border-solid border-2 flex w-full">
          <button className="flex-1 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Right</button>
          <button className="flex-1 py-1 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Move</button>
          <button className="flex-1 justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Left</button>
        </div>

        <div className="mt-3 p-3 border-gray-200 rounded-md border-solid border-2">
          <fieldset className="pb-3">
            <legend className="text-base font-medium text-gray-900 mb-2">Position</legend>
            <label for="posX" className="text-sm font-medium text-gray-700">X:</label>
            <input id="posX" type="number" min="0" max="4" placeholder="X" required="" className="mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-500 rounded-md border-solid border-2 pl-2 ml-1" />

            <label for="posY" className="text-sm font-medium text-gray-700">Y:</label>
            <input id="posY" type="number" min="0" max="4" placeholder="Y" required="" className="mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-500 rounded-md border-solid border-2 pl-2 ml-1" />
          </fieldset>

          <fieldset>
            <legend className="text-base font-medium text-gray-900 mb-2">Face</legend>

            <div className="flex items-center mb-2">
              <div className="flex items-center">
                <input id="north" type="radio" name="face" value="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label for="north" className="ml-1 mr-3 block text-sm font-medium text-gray-700">North</label>
              </div>

              <div className="flex items-center">
                <input id="east" type="radio" name="face" value="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label for="east" className="ml-1 mr-3 block text-sm font-medium text-gray-700">East</label>
              </div>

              <div className="flex items-center">
                <input id="south" type="radio" name="face" value="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label for="south" className="ml-1 mr-3 block text-sm font-medium text-gray-700">South</label>
              </div>

              <div className="flex items-center">
                <input id="west" type="radio" name="face" value="" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label for="west" className="ml-1 mr-3 block text-sm font-medium text-gray-700">West</label>
              </div>
            </div>
          </fieldset>
          
          <button type="submit" className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Place
          </button>
        </div>

        <div className="mt-2 p-3 border-gray-200 rounded-md border-solid border-2">
          <fieldset className="pb-3">
            <legend className="text-base font-medium text-gray-900 mb-2">Click report to see the position of Pacman</legend>
          </fieldset>
          <div>
            <button className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Report</button>
          </div>
          <p className="mt-3 px-4 py-3 bg-gray-100 text-left sm:px-6">The Pacman is placed in [1, 1] facing [East]</p>
        </div>
      </form>

      {/* FOOTER */}
      <footer>
        <p class="text-left text-black text-xs p-3 mt-6">
          &copy;2020 Pacman Game
        </p>
      </footer>
    </div>
  );
}

export default App;
