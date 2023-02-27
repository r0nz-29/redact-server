import {useState} from "react";

const defaultBoard = {
  _id: "",
  name: "",
  owner: "",
  lists: [
    {
      _id: 0,
      title: "",
      cards: [
        {
          _id: 0,
          title: "",
          description: "",
        },
        {
          _id: 0,
          title: "",
          description: "",
        }
      ]
    }
  ],
};

export function Board(props) {
  const [board, setBoard] = useState(defaultBoard);
}