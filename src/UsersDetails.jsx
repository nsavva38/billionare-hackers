const UsersDetails = ({ userDetails, setShowList }) => {

  return (
    <>
      <h2>User's Details</h2>
      <p>{userDetails.name}</p>
      <p>{userDetails.company.name}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.phone}</p>
      <button onClick={() => setShowList(true)}>Back</button>
    </>
    
  )
}

export default UsersDetails