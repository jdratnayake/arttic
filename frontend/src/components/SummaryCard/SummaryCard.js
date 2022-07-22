import "./SummaryCard.css";

function SummaryCard({ cardHeading, numberValue }) {
  return (
    <span className="transactionAnalyticsCard">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col mt-0">
              <p class="h5">{cardHeading}</p>
            </div>

            {/* <div class="col-auto">
              <div class="stat text-primary">
                <i class={iconName + " iconStyle"}></i>
              </div>
            </div> */}
          </div>
          <h1 class="mt-1 mb-3">{numberValue}</h1>
        </div>
      </div>
    </span>
  );
}

export default SummaryCard;
