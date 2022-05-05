import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDeleteButton = id => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            console.log("Post is deleting");
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
    }

    return (
        <div className='w-50 mx-auto text-center mt-5'>
            <h2>This is from Manage user</h2>
            <div>
                {
                    services.map(service => <div key={service._id}>

                        <h5>Name : {service.name} <button onClick={() => handleDeleteButton(service._id)}>Delete</button> </h5>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;