import '../App.css'
const TasksList = ( {list, remove} ) => {

    return (
        <>
            {list?.length > 0 ? (
                <> {list.map((entry, index) => (
                    <div>
                        <input
                            className={'checked'}
                            type="checkbox"
                        />
                        <label key={index}>{entry}</label>
                        <button className={'btn'} onClick={()=> remove(entry)}>убрать</button>
                    </div>
                ))}

                </>


            ) : (
                <p>добавьте что-то в список покупок!</p>
            )}

        </>
    )
}


export default TasksList

