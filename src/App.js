import './App.css';

import {Routes, Route} from 'react-router-dom';
import UsersPage from "./pages/UserPage/UsersPage";
import PostsPage from "./pages/PostPage/PostsPage";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPost from "./pages/UserPost/UserPost";
import PostDetails from "./pages/PostDetails/PostDetails";
import ComentsPost from "./pages/ComentsPost/ComentsPost";
import Layout from "./pages/Layout/Layout";
import UserAlbums from "./pages/UserAlbums/UserAlbums";
import Photos from "./pages/Photos/Photos";

function App() {
  return (
   <div>
       <Routes>
           <Route path={'/'} element={<Layout/>}>
               <Route path={'/users'} element={<UsersPage/>}>
                   <Route path={':id'} element={<UserDetails/>}>
                       <Route path={'posts'} element={<UserPost/>}/>
                   </Route>

                   <Route path={':id/albums'} element={<UserAlbums/>}>
                       <Route path={'photos'} element={<Photos/>}/>
                   </Route>
               </Route>



               <Route path={'/posts'} element={<PostsPage/>}>
                   <Route path={':id'} element={<PostDetails/>}>
                       <Route path={'comments'} element={<ComentsPost/>}/>
                   </Route>

               </Route>
           </Route>

       </Routes>
   </div>
  );
}

export default App;
