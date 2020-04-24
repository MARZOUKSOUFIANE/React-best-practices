import React,{useState} from 'react'
import { css } from "@emotion/core";
import {ClipLoader,PulseLoader, BarLoader} from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

function Loading() {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div>
             <ClipLoader
                css={override}
                size={50}
                color={"blue"}
                loading={isLoading}
                />
              <PulseLoader 
              css={override}
              size={50}
              color={"#123abc"}
              loading={isLoading}
              />
              <BarLoader 
              css={override}
              sizeUnit={"px"}
              size={100}
              width={"100%"}
              color={"red"}
              loading={isLoading}
              />  
        </div>
    )
}

export default Loading
