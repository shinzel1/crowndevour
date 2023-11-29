import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './featured-locations.css'
import itemData from '../../../../data/CafeResturants.json'
import imageFeature from "../../../../data/Images/post/post-4.jpg"
import { Link } from 'react-router-dom'
export default function MasonryImageList() {
  return (
    <div className='centered'>
      <Box sx={{ width: '80%', overflowY: 'scroll', boxShadow: '2px 2px 16px 2px rgba(0,0,0,0.5)' }}>
        <ImageList variant="masonry" cols={3} gap={20}>
          {itemData.map((item) => (
            <Link to={'/location/' + item.title} state={{ loc: item }} key={item.title+ "ahref"}>
            <ImageListItem key={item.title + "Masonry"}>
                <img className='darker'
                  srcSet={`${imageFeature}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${imageFeature}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                  loading="lazy"
                />
                <div>
                  <p>{item.name}</p>
                </div>
            </ImageListItem>
            </Link>

          ))}
        </ImageList>
      </Box>
    </div>

  );
}