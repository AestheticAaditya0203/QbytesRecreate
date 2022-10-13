/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
//import debounce from "../../utils/debounce";
import {
  FlTypography,
  FlGrid,
  FlTextField,
  FlInputAdornment,
  FlCircularProgress,
  FlUseTheme,
  FlUseMediaQuery,
} from "../../elements";
/* import * as pageAction from "../../actions/pageAction";
import * as authAction from "../../actions/authAction"; */
// import { GET_SEARCH_PAGE_RESULTS } from '../../../actions/pageAction';
/* import FlPageList from "../../elements/FlPageList";
import { AlertNotificationContext } from "../../elements/alert/alertState";
import { retrieveLocalStorage } from "../../services/storageServices";
import ButtonWithLoader from "../../elements/FlButtonWithLoader"; */

function GlobalSearch({ handleShowSearch, type, showLoadBtn }) {
  const theme = FlUseTheme();
  /*  const isMobile = FlUseMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
    // const { setAlert } = useContext(AlertNotificationContext);
    const dispatch = useDispatch();
    const searchText = useSelector((state) => state.page.pageSearchText);
    const searchField = useRef(null);
    const router = useRouter(); */
  // const isUserLogin = retrieveLocalStorage('userLogin');
  // const list = useSelector((state) => state.page.pageList);
  // const totalResults = useSelector((state) => state.page.totalResults);
  // const hasNextPage = useSelector((state) => state.page.hasNextPage);
  // const nextPage = useSelector((state) => state.page.nextPage);
  const [searchDropdown, setSearchDropdown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);
  // const [mouseButton, setMouseButton] = useState(false);
  const mouseHoverButton = false;

  const sendQuery = (value) => {
    dispatch(pageAction.searchPage(value));
  };

  //const search = useCallback(debounce(sendQuery, 500), []);

  const searchResults = (value) => {
    search(value);
  };

  // const handleRedirect = (e) => {
  //   if (isUserLogin) {
  //     // history.push('/page/create');
  //   } else {
  //     e.preventDefault();
  //     setAlert('error', 'Login or SignUp Required!');
  //     dispatch(authAction?.OpenLoginModel());
  //   }
  // };

  // useEffect(() => {
  //   if (searchDropdown) {
  //     // setLoader(true);
  //     dispatch(pageAction.getSearchPageResults(searchText, 1, () => {
  //       setLoader(false); searchField.current.focus();
  //     }));
  //   }
  // }, [searchText]);

  // useEffect(() => {
  //   if (!searchDropdown) {
  //     searchField.current.value = '';
  //     dispatch(pageAction.searchPage(''));
  //   }
  // }, [searchDropdown]);

  // const handleInputClick = () => {
  //   // if (isUserLogin) {
  //   //   // history.push('/page/search');
  //   // } else {
  //   setLoader(true);
  //   dispatch(pageAction.getSearchPageResults(searchText, 1, () => {
  //     setLoader(false);
  //     searchField.current.focus();
  //   }));
  //   setSearchDropdown(true);
  //   // }
  // };

  // const fetchNextPages = (e) => {
  //   e?.preventDefault();
  //   if (hasNextPage && searchDropdown) {
  //     // setSearchDropdown(true);
  //     // setSearchDropdown(true);
  //     dispatch(pageAction.getSearchPageResults(searchText, nextPage, () => {
  //       setLoader(false); searchField.current.focus();
  //     }, list));
  //   }
  // };

  const handleCloseDropdown = () => {
    if (!mouseHoverButton) {
      setTimeout(() => {
        setSearchDropdown(false);
      }, 400);
    }
  };

  // const getString = (path, url) => path + url;

  return (
    <FlGrid
      sx={{
        borderRadius: "6px",
        padding: 0,
        margin: 0,
        // backgroundColor: Flalpha(theme.palette.common.black, 0.06),
        // '&:hover': {
        //   backgroundColor: Flalpha(theme.palette.common.black, 0.1),
        // },
      }}
      // style={{ display: router.pathname === '/stories' ? '' : 'none' }}
      id="dropDownDiv"
    >
      <FlGrid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ position: "relative", left: 60 }}
      >
        <FlTextField
          autoComplete="off"
          variant="standard"
          //defaultValue={searchText}
          //inputRef={searchField}
          fullWidth
          disabled={loader}
          placeholder="Search stories"
          /* onFocus={() => {
              if (router.pathname !== '/recent-visual-stories') {
                router.push('/recent-visual-stories');
              }
            }} */
          onChange={(e) => searchResults(e.target.value)}
          onBlur={handleCloseDropdown}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <FlInputAdornment position="start">
                <SearchIcon style={{ color: "#EF613B" }} />
              </FlInputAdornment>
            ),
            endAdornment: (
              <FlInputAdornment
                position="end"
                style={{
                  display:
                    loader && !window.location.pathname === "/" ? "" : "none",
                }}
              >
                <FlCircularProgress size={15} />
              </FlInputAdornment>
            ),
            style: {
              zIndex: 2,
              padding: "6px 10px",
              backgroundColor: "#F7F7F8",
              borderRadius: "4px",
              font: 'normal normal 16px/19px "SF Pro Rounded", sans-serif',
              "&::placeholder": {
                font: 'normal normal 16px/19px "SF Pro Rounded", sans-serif',
                color: "#888F9D",
              },
            },
          }}
        />
      </FlGrid>
    </FlGrid>
  );
}

/*   GlobelSearch.defaultProps = {
    showLoadBtn: false,
  };
  
  GlobelSearch.propTypes = {
    handleShowSearch: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    showLoadBtn: PropTypes.bool,
  };
   */
export default GlobalSearch;
