import { useState } from "react";

import UsersList from "./UsersList.jsx";
import UsersDetails from "./UsersDetails.jsx";


const App = () => {
  const [showList, setShowList] = useState(true);
  const [userDetails, setUserDetails] = useState({});


  return (
    <>
      <h1>Billionare Hackers</h1>

      {
        showList ? <UsersList 
                    setShowList={setShowList} 
                    setUserDetails={setUserDetails} 
                    /> 
                    :
                    <UsersDetails 
                      userDetails={userDetails}
                      setShowList={setShowList}
                    />
      }

    </>
  )
}

export default App
