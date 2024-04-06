// import exp from "constants";

import { PlusIcon } from "@heroicons/react/16/solid";

function NewChat(){
    return(
        <div className="border-gray-700 border chatRow">
            <PlusIcon className="h-4 v-4"/>
           <p>New Chat</p> 
        </div>
    )
}
export default NewChat; 