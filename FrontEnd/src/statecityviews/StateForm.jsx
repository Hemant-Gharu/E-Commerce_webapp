import {useState} from "react"
import axios from "axios";

const StateForm = () => {
  const [stid, setStid] = useState();
  const [stname, setStName] = useState();

  const handleStId = (evt) => {
    setStid(evt.target.value);
  };
  const handleStName= (evt) => {
    setStName(evt.target.value);
  };
  const handleSaveButton = () => {
    axios
      .post("http://localhost:5050/state/addstate/" + stid + "/" + stname)
      .then((res) => {
        alert("State Saved");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
        <table>
          <tr>
            <td>State ID</td>
            <td>
              <input type="number" onChange={handleStId} />
            </td>
          </tr>
          <tr>
            <td>State Name</td>
            <td>
              <input type="text" onChange={handleStName} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" onClick={handleSaveButton}>
                Save
              </button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};
export default StateForm;
