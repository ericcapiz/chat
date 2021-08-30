import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelContainer, ChannelListContainer, ChannelSearch } from './components';
import './App.css';

const apiKey = '7pxmuau777mq';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client ={client} theme="team light">
          <ChannelListContainer />

          <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
