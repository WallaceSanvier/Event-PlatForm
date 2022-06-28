import {Route, Routes} from 'react-router-dom';
import { Event } from './src/pages/Event';
import { Subscribe } from './src/pages/Subscribe';

export function Router() {
  return(
    <Routes>
     <Route path="/" element={<Subscribe/>} />
     <Route path="/event" element={<Event/>} />
     <Route path="/event/lesson/:slug" element={<Event/>} />
     <Route path="/subscribe" element={<Subscribe/>} />
    </Routes>
  )
}