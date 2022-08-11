import InputBox from "../../components/InputBox/InputBox";
import Posts from "../../components/Posts/Posts";
import Ad from "../../components/Ad/Ad";

function Feed() {
  const ads = [
  { id: 1,
    url:"https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/820/cached.offlinehbpl.hbpl.co.uk/news/SUC/nft-unlock.jpg"},
  { id: 2,
    url:"https://press.farm/wp-content/uploads/2022/02/nft-pomotion-advertise-your-nfts-755x466.jpg"}];
  return (
    <div className="row p-0 m-0">
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container p-0 feed-container">
            <InputBox />
            <Posts />
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-4 col-advertisment">
        {ads.map(ad => {return(<Ad key={ad.id} image={ad.url}/>)})}
      </div>
    </div>
  );
}
export default Feed;


