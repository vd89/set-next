
'use client';
function ViewData(props) {
  // 'use server'
  const {changeLocation , dataChanges} =props
  const newFunction = () => {
    changeLocation('this is from data change')
    return console.log("hello world ")
  }
  return (
    <div>
      <button onClick={ () =>newFunction()}>
        Change location
      </button>
      <ul>
        <li>{dataChanges}</li>
      </ul>
    </div>
   );
}

export default ViewData;