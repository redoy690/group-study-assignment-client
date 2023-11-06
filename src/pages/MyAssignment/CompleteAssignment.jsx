import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import CompleteCard from "./CompleteCard";

const CompleteAssignment = () => {
    const { user } = useContext(AuthContext)
    const mail = user.email
    const myassign = useLoaderData()
    return (
        <div>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {
                        myassign.filter(data => { return data.questionEmail == mail && data.status =="Complete" }).map(mycard => <CompleteCard key={mycard.id} mycard={mycard}></CompleteCard> )
                    }
                </div>
                {/* {
                    myassign.filter(data => { return data.status !== "Complete" }) && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Complete Assignment.</p>
                } */}
            </div>
        </div>
    );
};

export default CompleteAssignment;