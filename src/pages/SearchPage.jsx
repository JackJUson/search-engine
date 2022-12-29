import Search from "../components/Search";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../Response.jsx";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term); // LIVE API CALL
  const data = Response;

  console.log(data);

  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className="search__page--logo"
            alt=""
          />
        </Link>
        <div className="search__page--header-body">
          <Search hideButtons />
          <div className="search__page--options">
            <div className="search__page--options-left">
              <div className="search__page--option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page--option">
                <FeedIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search__page--option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search__page--option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search__page--option">
                <SlideshowIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="search__page--option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="search__page--options-right">
              <div className="search__page--option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="search__page--results">
          <p className="search__page--result-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="search__page--result">
              <a href={item.link}>{item.displayLink}</a>
              <a href={item.link} className="search__page--result-title">
                <h2>{item.title}</h2>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
