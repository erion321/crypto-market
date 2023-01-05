import "./Overview.scss";
import { useDispatch } from "react-redux";
import { addNewTransaction, addQuantity } from "../../features/appSlice";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let specificCoin = localStorage.getItem("myCoin");
  specificCoin = JSON.parse(specificCoin);

  return (
    <section>
      <header>
        <h3>{specificCoin.name}</h3>
        <h4> {specificCoin.symbol} </h4>
      </header>
      <main>
        <form>
          <input
            onChange={(e) => dispatch(addQuantity(e.target.value))}
            type="number"
            step=".01"
          />
          <h4>{specificCoin.symbol}</h4>
          <p>
            US$ <span> {parseFloat(specificCoin.price).toFixed(4)} </span>per
            coin
          </p>
          <button
            type="submit"
            onClick={() => {
              dispatch(addNewTransaction());
              navigate("/portofolioPage");
            }}
          >
            Add Transaction To Portofolio
          </button>
        </form>
      </main>

      <article>
        <h2>Statistics</h2>
      </article>
    </section>
  );
}