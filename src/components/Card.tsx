import vector from "../assets/vector.svg";
import { caption } from "./ui";
import { data } from "../utils/data";
function Card() {
  return (
    <div className="flex flex-row flex-wrap">
      {data.map((coin, key) => {
        let priceIntl = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        return (
          <div className="main-div sm:m-10" key={key}>
            <img
              src={`/src/assets/${coin.symbol.toLowerCase()}.svg`}
              className="c-img"
              alt=""
            />
            <img src={vector} />
            <div className="new">
              <span className={`${caption} mt-2`}>
                {coin.name} ({coin.symbol})
              </span>
              <div className="my-2">
                <div className="flex flex-row justify-evenly content-baseline px-10 py-2 rounded-full bg-[#14172B]">
                  <h2>
                    {priceIntl.format(coin.price)}{" "}
                    <span
                      className={
                        coin.change > 0
                          ? `text-[#00FFA3] text-xs`
                          : `text-[#ff0000] text-xs`
                      }>
                      {coin.change > 0 ? `+${coin.change}` : coin.change}%
                    </span>
                  </h2>
                </div>
                <span className={caption}>Price</span>
              </div>
              <div className="my-2">
                <div className="px-10 py-2 rounded-full bg-[#14172B]">
                  <h2>${coin.tvl}</h2>
                </div>
                <span className={caption}>TVL</span>
              </div>

              <div className="mt-4 ">
                <div className="px-10 py-2 mx-8 max-w-fit rounded-full bg-[#14172B] flex flex-row algin-center justify-evenly">
                  {coin.popular.map((pair, key) => {
                    return (
                      <img
                        key={key}
                        src={`/src/assets/${pair.toLowerCase()}.svg`}
                        width="20px"
                      />
                    );
                  })}
                </div>
                <span className={caption}>Popular pairs</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="rect">
        <div className="p-10">
          <span>Bitcoin (BTC)</span>
          <div>
            <h2>$312</h2>
          </div>
          <span>Price</span>
          <div>
            <h2>$312</h2>
          </div>
          <span>TVL</span>
          <br />
          <div>
            <h2></h2>
          </div>
          <span>Popular pairs</span>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
