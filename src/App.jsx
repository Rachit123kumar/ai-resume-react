
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import {  useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header';

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60*1000
    }
  }
});
function App() {
  const {isSignedIn, isLoaded}=useUser();

  if(!isSignedIn && isLoaded){
  return  <Navigate to="/auth/sign-in"/>
  }


  return (
    <>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/>

    <div className="text-3xl">
      <Header/>
   
      <Outlet/>
      

    </div>
    </QueryClientProvider>

    </>
  )
}

export default App
