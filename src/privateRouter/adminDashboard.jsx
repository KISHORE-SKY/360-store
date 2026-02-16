import { FaUserAstronaut } from "react-icons/fa6";

function Dashboard(){
    return(
        <>
            <section className="pt-[90px] p-2 pb-4">
                <div>
                    <FaUserAstronaut />
                    <h2>Hi Admin!</h2>
                </div>
            </section>
        </>
    );
}


export default Dashboard;