import CreatorCard from "../../components/CreatorCard/CreatorCard";

import "./SubscribedCreatorsPage.css";

function SubscribedCreatorsPage() {
  return (
    <span className="subscribedCreatorsPage">
      <div class="row row-cols-1 row-cols-md-2 row-cols-md-3">
        <CreatorCard />

        <CreatorCard />

        <CreatorCard />

        <CreatorCard />

        <CreatorCard />

        <CreatorCard />
      </div>
    </span>
  );
}

export default SubscribedCreatorsPage;
