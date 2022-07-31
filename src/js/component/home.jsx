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



//función para guardar la tarea, luego de guardar la tarea pone el input vacio
		const guardarLista =(event)=>{
			if (event.key === "Enter"){
				if(task.task.trim() !== ""){
					setListaTareas([...listaTareas, task])
					setTarea({task:"", done:false})
				}else{
					window.alert("Todos los campos deben estar llenos");
				}
			}
		}



//funcion para borrar una tarea
		const borrarTarea =(id)=>{
			let nuevaListaTareas = listaTareas.filter((item,index)=>{
				return (
					id != index
				)
			})
			setListaTareas(nuevaListaTareas)
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
				{listaTareas.map((item,index)=>{
					return(
						<li className="tareaNueva" key={index} onClick={()=>borrarTarea(index)}>
							{item.task}
						</li>
					)
				})

				}
 			</ul>
 		</div>
 		<p>{listaTareas.length}</p>
 	</div>
	
</div>



	);
};

export default Home;


