// import "./styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListAction } from "./redux/action";
import { addItems } from "./redux/action";
import { deleteData } from "./redux/action";

export default function App() {
  const selector = useSelector((state) => state);
  console.log(selector);
  const [input, setInput] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemImage: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAction());
  }, []);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const onClickHandler = () => {
    dispatch(addItems(input));
  };

  const deleteHandler = (index) => {
    dispatch(deleteData(index));
  };

  return (
    <div className="App">
      <div>
        <h1>Add New Product</h1>
        <div>
          <div>
            <label>Product Name </label>
            <input
              type="text"
              name="itemName"
              onChange={onChangeHandler}
              value={input.itemName}
            />
          </div>

          <div>
            <label>Description </label>
            <textarea
              type="text"
              name="itemDescription"
              onChange={onChangeHandler}
              value={input.itemDescription}
            />
          </div>

          <div>
            <label>Price </label>
            <input
              type="number"
              name="itemPrice"
              onChange={onChangeHandler}
              value={input.itemPrice}
            />
          </div>

          <div>
            <label>Image </label>
            <input
              type="text"
              name="itemImage"
              onChange={onChangeHandler}
              value={input.itemImage}
              placeholder="Paste Image URL Here"
            />
          </div>
        </div>

        <button onClick={onClickHandler}>Add</button>
      </div>

      <ul class="card-list">
        {selector?.rootReducers?.productList?.products.map((val, index) => {
          return (
            <>
              <li class="card" style={{ marginTop: "50px" }}>
                <img src={val?.thumbnail} alt="img" />

                <h2>{val?.title}</h2>
                <p>Description:- {val?.description}</p>
                <p>Price:- {val?.price} </p>
                <button
                  style={{ background: "red", color: "white" }}
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
