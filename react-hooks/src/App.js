import React from 'react'
import './App.css';
import HookCounter from './Components/HookCounter'
import HookCounterTwo from './Components/HookCounterTwo'
import HookCounterThree from './Components/HookCounterThree'
import HookCounterFour from './Components/HookCounterFour'
import EffectHook from './Components/EffectHook'
import HookMouse from "./Components/HookMouse";
import MouseContainer from './Components/MouseContainer'
import IntervalHook from './Components/IntervalHook'
import DataFetching from './Components/DataFetching'
import ContextHook from './Components/ContextHook'
import ReducerCount from './Components/ReducerCount'
import ReducerCountTwo from './Components/ReducerCountTwo'
import ReducerDataFetch from './Components/ReducerDataFetch'
import MemoHook from './Components/MemoHook'
import FocusTimer from './Components/FocusTimer'
import HookTimer from './Components/HookTimer'
import DocumentTitle  from './Components/DocumentTitle'
import CounterCustom from './Components/CounterCustom'
import UserFormCustom from './Components/UserFormCustom'

export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {
  return (
    <div className="App">
     <HookCounter />
     <HookCounterTwo />
     <HookCounterThree />
     <HookCounterFour />
     <EffectHook />
     {/* <HookMouse /> */}
     <MouseContainer />
     <IntervalHook />
     <DataFetching />
     <userContext.Provider value={'yogesh'}>
       <channelContext.Provider value={'swami'}>
         <ContextHook />
       </channelContext.Provider>
     </userContext.Provider>
     <ReducerCount />
     <ReducerCountTwo />
     <ReducerDataFetch />
     <MemoHook />
     <FocusTimer />
     <HookTimer />
     <DocumentTitle />
     <CounterCustom />
     <UserFormCustom />
    </div>
  );
}

export default App;
