import ChefHeader from "../component/ChefHeader";
import ChefOrderList from "../component/ChefOrderList";

function Chef() {
    return (
        <main className='w-full h-screen font-raleway'>
            <ChefHeader/>
            <ChefOrderList/>
        </main>
    );
}

export default Chef;
