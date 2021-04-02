import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledOffer,
  HouseToOffer,
  InformationOffer,
  NavOffer,
  UbicationOffer,
  MakeAnOffer,
} from './OfferStyles';

import Preview from 'assets/previous.svg';
import Slide from 'assets/slide.svg';

export const Offer = () => {
  return (
    <StyledOffer>
      <HouseToOffer>
        <Link to="/">
          <div>
            <img src={Preview} alt="Icon backward" />
          </div>
        </Link>
        <div>
          <img src={Slide} alt="Icon Next Image" />
        </div>
      </HouseToOffer>
      <InformationOffer>
        <NavOffer>
          <ul>
            <li>
              <a>Photos</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Home Value</a>
            </li>
            <li>
              <a>School</a>
            </li>
            <li>
              <a>History</a>
            </li>
            <li>
              <a>History</a>
            </li>
            <li>
              <a>History</a>
            </li>
            <li>
              <a>History</a>
            </li>
            <li>
              <a>History</a>
            </li>
            <li>
              <a>History</a>
            </li>
          </ul>
        </NavOffer>
        <UbicationOffer>
          <div>
            <h2>123 Main St, Phoenix, AZ 85709</h2>
            <div>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png"
                alt="file upload icon"
              />
              <img
                src="https://icons-for-free.com/iconfiles/png/512/heart-131979013098531770.png"
                alt="Icon Of heart"
              />
            </div>
          </div>
          <div>
            <small>$300,000</small>
            <small>Single Family</small>
            <small>3bd 2ba 1,800ft</small>
          </div>
        </UbicationOffer>
        <MakeAnOffer>
          <button>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4xODgsMjM2LjQxM0wyOTcuNzk4LDI2LjY1Yy0wLjI2Ny0wLjI3LTAuNTQ0LTAuNTMyLTAuODI2LTAuNzg2Yy0yMi43NTUtMjAuNDMxLTU3LjE0LTIwLjUwNC03OS45ODItMC4xNjkgICAgYy0wLjI4NCwwLjI1My0wLjU2LDAuNTE0LTAuODI5LDAuNzgyTDUuODcyLDIzNi4zNTJjLTcuODE4LDcuODA0LTcuODMxLDIwLjQ2Ny0wLjAyOCwyOC4yODUgICAgYzcuODA0LDcuODE4LDIwLjQ2Nyw3LjgzLDI4LjI4NCwwLjAyOEw1MCwyNDguODI0djE3Mi42ODRjMCw0NC4xMTIsMzUuODg4LDgwLDgwLDgwaDcyYzExLjA0NiwwLDIwLTguOTU0LDIwLTIwdi0xNjNoNzB2MTYzICAgIGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg3MGM0NC4xMTIsMCw4MC0zNS44ODgsODAtODBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwICAgIGMwLDIyLjA1Ni0xNy45NDQsNDAtNDAsNDBoLTUwdi0xNjNjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBIMjAyYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHYxNjNoLTUyYy0yMi4wNTYsMC00MC0xNy45NDQtNDAtNDAgICAgdi0yMTJjMC0wLjItMC4wMDMtMC4zOTktMC4wMDktMC41OTdMMjQzLjk0Niw1NS4yNmM3LjQ5My02LjM2MywxOC40ODMtNi4zMzksMjUuOTQ3LDAuMDU1TDQyMiwyMDguNDI1djExMy4wODMgICAgYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwYzExLjA0NiwwLDIwLTguOTU0LDIwLTIwdi03Mi44MmwxNS44MTIsMTUuOTE3YzMuOTA5LDMuOTM1LDkuMDQ3LDUuOTA0LDE0LjE4OCw1LjkwNCAgICBjNS4wOTcsMCwxMC4xOTUtMS45MzcsMTQuMDk2LTUuODEyQzUxMy45MzIsMjU2LjkxMiw1MTMuOTc0LDI0NC4yNDksNTA2LjE4OCwyMzYuNDEzeiIgZmlsbD0iIzFjODVlOCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
            &nbsp;Make an offer
          </button>
          <button>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/159/159037.svg?token=exp=1617391874~hmac=dead21f64e0f75f95f1dfc33a4c3ff8b"
              alt="icon of padlock"
            />
            &nbsp;Tour
          </button>
        </MakeAnOffer>
      </InformationOffer>
    </StyledOffer>
  );
};
