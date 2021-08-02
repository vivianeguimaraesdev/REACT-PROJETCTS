import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css";


const TaskDetails = () =>{
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick= () =>{
      history.goBack();
    };

    return (
      <>
        <div className="back-button-container">
          <Button onClick={handleBackButtonClick}> Voltar</Button>
        </div>
        <div className="task-details-container">
          <h2>{params}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            fugiat laborum odit dolorum officiis corrupti, qui fuga velit
            voluptas exercitationem excepturi et, amet non reprehenderit quidem
            reiciendis ea consequatur vero.
          </p>
        </div>
      </>
    );
}

export default TaskDetails;