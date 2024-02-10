import 'bootstrap/dist/css/bootstrap.min.css' // Importa el archivo CSS de Bootstrap
import Header from './components/Header'
import Footer from './components/Footer'
import MyCard from './components/MyCard'
import './App.css';


function App() {
 
return <>
<Header titulo="Adopta un perrito 🐶"/>

<div className='Tarjetas'>
<MyCard
imagen= "https://placedog.net/800/640?id=6" 
nombre= "Kitana" 
descripcion = "Perrito busca hogar en la comuna de Santiago"
bg="success"
raza="Mestizo"
/>



<MyCard
imagen= "https://placedog.net/800/640?id=8" 
nombre= "Shao Khan" 
descripcion = "Perrito busca hogar en la comuna de Providencia"
bg="primary"
raza="Mestizo"/>


<MyCard
imagen= "https://placedog.net/800/640?id=10" 
nombre= "Agata" 
descripcion = "Perrito busca hogar en la comuna de Quinta Normal"
bg="danger"
raza="Mestizo"
/>


<MyCard
imagen= "https://placedog.net/800/640?id=14" 
nombre= "Nau" 
descripcion = "Perrito busca hogar en la comuna de Cerrillos"
bg="warning"
raza="Mestizo"
/>



</div>

<Footer/>
</>;
}

export default App;

