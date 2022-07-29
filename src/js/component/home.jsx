import React , {useState} from "react";

//create your first component
const Home = () => {

//estado global de como inicia el estado de tarea
		const [task,setTarea]=useState(
		{task:"",
			done:false
		});
//estado global de como inicia la lista de tareas que se mostrará en el ul
		const [listaTareas,setListaTareas]=useState([])

//función que sincroniza la variable tarea en el input con el estado

		const handleChange = (event)=>{

			setTarea({...task,[event.target.name]: event.target.value})
				};

//función para guardar la tarea
		const guardarLista =(event)=>{
			if (event.key === "Enter"){
				if(task.task.trim() !== ""){
					setListaTareas([...listaTareas, task])
					setTask({task:"", done:false})
				}else{
					window.alert("Todos los campos deben estar llenos");
				}
			}
		}



	return (
		<div className="container">
 	<div className="row">
 		<h1>HOLA</h1>
 	</div>
 	<div className="row">
 		<div className="col-12 md-6"> 
 			<input placeholder="que quieres hacer?"
			name="task"
			type="text"
			value={task.task}
			onChange={handleChange}
			onKeyDown={guardarLista}
			/>

 		</div>
 	</div>
 	<div className="row">
 		<div className="col">
 			<ul>
 				<li>aqui van las tareas</li>
 			</ul>
 		</div>
 		<p>aqui van cuantas tareas se estan agg</p>
 	</div>
	
</div>



	);
};

export default Home;


