import ChefHeader from "../component/ChefHeader";
import ChefOrderList from "../component/ChefOrderList";

function Chef() {
    return (
        <main className='w-full h-screen font-raleway bg-gray-100'>
            <ChefHeader/>
            <ChefOrderList/>
        </main>
    );
}

export default Chef;
