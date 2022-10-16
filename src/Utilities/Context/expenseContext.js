import createDataContext from "./createDataContext";
import uuid from "react-uuid";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "addEntry": {
      let flag = 0;
      console.log("Helo reducer");
      state.map((e) => {

        if (e.date.toDateString() === action.payload.date.toDateString()) {
        

          e.expenseentries.push(action.payload.entry);
          flag = 1;
        }
      });
      if (flag === 1) {
        return [...state];
      } else {

        return [
          ...state,
          {
            id: uuid(),
            date: action.payload.date,
            expenseentries: [action.payload.entry],
          },
        ];
      }
    }
    case "deleteEntry": {
      const arr = state.filter(
        (object) => object.id === action.payload.objectid
      );
      arr[0].expenseentries = arr[0].expenseentries.filter(
        (object) => object.id != action.payload.entryid
      );
      if (arr[0].expenseentries.length > 0) {
        state.map((object) => {
          if (object.id === arr[0].id) {
            object = arr[0];
          }
        });
      } else {
        state = state.filter((object) => object.id != action.payload.objectid);
      }

    

      return [...state];
    }
    default:
      return state;
  }
};

const addEntry = (dispatch) => {
  return (expenseObject, date) => {
    let newEntry = {
      id: uuid(),
      amount: parseInt(expenseObject.amount),
      key: expenseObject.key,
      type: expenseObject.type,
    };
    dispatch({ type: "addEntry", payload: { date, entry: newEntry } });
  };
};

const deleteEntry = (dispatch) => {
  return (entryid, objectid) => {
    dispatch({ type: "deleteEntry", payload: { entryid, objectid } });
  };
};

export const { Context, Provider } = createDataContext(
  expenseReducer,
  { addEntry, deleteEntry },
  [
    {
      id: "1000",
      date: new Date("2022-10-14"),
      expenseentries: [
        {
          id: "100",
          key: "Car tyre change",
          amount: 329,
          type: "Expense",
        },
        {
          id: "101",
          key: "Hospital Bill",
          amount: 329,
          type: "Expense",
        },
        {
          id: "102",
          key: "Salary",
          amount: 30000,
          type: "Income",
        },
      ],
    },
    {
      id: "1001",
      date: new Date("2022-10-15"),
      expenseentries: [
        {
          id: "200",
          key: "Car tyre change",
          amount: 329,
          type: "Expense",
        },
        {
          id: "201",
          key: "Hospital Bill",
          amount: 329,
          type: "Expense",
        },
        {
          id: "202",
          key: "Salary",
          amount: 30000,
          type: "Income",
        },
      ],
    },
  ]
);
