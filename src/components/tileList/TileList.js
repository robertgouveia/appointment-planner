import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <ul>
      {data.map(item => {
        let {name, ...rest} = item;
        let description = Object.values(rest);
        return (
            <Tile name={name} description={description} key={name}/>
        )
      })}
    </ul>
  );
};
